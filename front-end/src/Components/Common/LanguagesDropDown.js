import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import PropTypes from "prop-types";
import React from "react";

class LanguagesDropDown extends React.Component {
    state = {
        languages: [],
    };

    async componentDidMount() {
        // Get languages from API

        try {
            const response = await axios.get("/api/task/get_language/");
            this.setState({ languages: response.data });
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
        const { languages } = this.state;
        const { selected, id, isSingleSelect } = this.props;
        const languagesIsEmpty = languages.length === 0;

        return (
            <Multiselect
                singleSelect={isSingleSelect}
                options={languages}           // Options to display in the dropdown
                selectedValues={selected}     // Preselected value to persist in dropdown
                onSelect={this.handleChanges} // Function will trigger on select event
                onRemove={this.handleChanges} // Function will trigger on remove event
                placeholder={
                    languagesIsEmpty
                        ? "Languages not found"
                        : "Choose languages"
                }
                disable={languagesIsEmpty}
                displayValue="name" // Property name to display in the dropdown options
                id={id}
            />
        );
    }
}

LanguagesDropDown.propTypes = {
    selected: PropTypes.array,        // Default selected items
    id: PropTypes.string,             // Component id
    isSingleSelect: PropTypes.bool,   // Define single selecting
    overrideOnSelect: PropTypes.func, // Function what called in parent component when something changed
};

LanguagesDropDown.defaultProps = {
    selected: [],
    id: "languages",
    isSingleSelect: false,
    overrideOnSelect: () => {},
};

export default LanguagesDropDown;
