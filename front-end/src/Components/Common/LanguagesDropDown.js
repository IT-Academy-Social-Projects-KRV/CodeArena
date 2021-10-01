import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import PropTypes from "prop-types";
import React from "react";

class LanguagesDropDown extends React.Component {
    state = {
        languages: [],
    };

    handleChanges = this.handleChanges.bind(this);

    async componentDidMount() {
        // Get languages from API

        try {
            const response = await axios.get("/api/task/get_language/");
            this.setState({ languages: response.data });
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
        const { languages } = this.state;
        const { selected, id } = this.props;

        return (
            <Multiselect
                options={languages}           // Options to display in the dropdown
                selectedValues={selected}     // Preselected value to persist in dropdown
                onSelect={this.handleChanges} // Function will trigger on select event
                onRemove={this.handleChanges} // Function will trigger on remove event
                placeholder={
                    languages.length === 0
                        ? "Languages not finded"
                        : "Choose languages"
                }
                disable={languages.length === 0}
                displayValue="name" // Property name to display in the dropdown options
                id={id}
            />
        );
    }
}

LanguagesDropDown.propTypes = {
    selected: PropTypes.array,
    id: PropTypes.string,
};

LanguagesDropDown.defaultProps = {
    selected: [],
    id: "languages",
};

export default LanguagesDropDown;
