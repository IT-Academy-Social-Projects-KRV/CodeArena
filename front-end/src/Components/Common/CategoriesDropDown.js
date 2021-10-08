import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import PropTypes from "prop-types";
import React from "react";

class CategoriesDropDown extends React.Component {
    state = {
        categories: [],
    };

    async componentDidMount() {
        // Get categories from API

        try {
            const response = await axios.get("/api/task/get_category/");
            this.setState({ categories: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChanges = async (selectedList) => {
        // Called when the item in component selected or removed

        await this.props.overrideOnSelect(
            selectedList.map((item) => item["name"]),
            this.props.id
        );
    };

    render() {
        const { categories } = this.state;
        const { selected, id, isSingleSelect } = this.props;
        const categoriesIsEmpty = categories.length === 0;

        return (
            <Multiselect
                singleSelect={isSingleSelect}
                options={categories}          // Options to display in the dropdown
                selectedValues={selected}     // Preselected value to persist in dropdown
                onSelect={this.handleChanges} // Function will trigger on select event
                onRemove={this.handleChanges} // Function will trigger on remove event
                placeholder={
                    categoriesIsEmpty
                        ? "Categories not found"
                        : "Choose categories"
                }
                disable={categoriesIsEmpty}
                displayValue="name" // Property name to display in the dropdown options
                id={id}
            />
        );
    }
}

CategoriesDropDown.propTypes = {
    selected: PropTypes.array,        // Default selected items
    id: PropTypes.string,             // Component id
    isSingleSelect: PropTypes.bool,   // Define single selecting
    overrideOnSelect: PropTypes.func, // Function what called in parent component when something changed
};

CategoriesDropDown.defaultProps = {
    selected: [],
    id: "categories",
    isSingleSelect: false,
    overrideOnSelect: () => {},
};

export default CategoriesDropDown;
