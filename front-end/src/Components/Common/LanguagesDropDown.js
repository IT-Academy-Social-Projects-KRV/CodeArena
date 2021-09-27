import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export class LanguagesDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [],
        };
    }

    async componentDidMount() {
        // Geting list of language from API

        try {
            const response = await axios.get("/api/task/get_language/");
            this.setState({ languages: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { languages } = this.state;
        const { selected } = this.props;
        return (
            <Form.Select
                className={this.props.overrideStyle}
                disabled={languages.length === 0}
            >
                <option selected disabled>
                    {languages.length === 0
                        ? "Languages not finded"
                        : "Choose language"}
                </option>
                {languages.map((language) => (
                    <option selected={selected === language.name} value={language.name}>{language.name}</option>
                ))};
            </Form.Select>
        );
    }
}

LanguagesDropDown.propTypes = {
    overrideStyle: PropTypes.string,
}

LanguagesDropDown.defaultProps = {
    overrideStyle: "",
}

export default LanguagesDropDown;
