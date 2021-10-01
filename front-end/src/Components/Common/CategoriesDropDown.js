import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import PropTypes from "prop-types";
import React from "react";

class CategoriesDropDown extends React.Component {
    state = {
        categories: [],
    };

    handleChanges = this.handleChanges.bind(this);

    async componentDidMount() {
        // Get categories from API

        try {
            const response = await axios.get("/api/task/get_category/");
            this.setState({ categories: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    async handleChanges(selectedList) {
        await this.props.overrideSelect(
            selectedList.map((item) => item["name"]),
            this.props.id
        );
    }

    render() {
        const { categories } = this.state;
        const { selected, id } = this.props;

        return (
            <Multiselect
                options={categories}          // Options to display in the dropdown
                selectedValues={selected}     // Preselected value to persist in dropdown
                onSelect={this.handleChanges} // Function will trigger on select event
                onRemove={this.handleChanges} // Function will trigger on remove event
                placeholder={
                    categories.length === 0
                        ? "Categories not finded"
                        : "Choose categories"
                }
                disable={categories.length === 0}
                displayValue="name" // Property name to display in the dropdown options
                id={id}
            />
        );
    }
}

CategoriesDropDown.propTypes = {
    selected: PropTypes.array,
    id: PropTypes.string,
};

CategoriesDropDown.defaultProps = {
    selected: [],
    id: "categories",
};

export default CategoriesDropDown;
