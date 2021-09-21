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
            const response = await axios.get("/task/get_language/");
            this.setState({ languages: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { languages } = this.state;
        return (
            <Form.Select
                className={this.props.ovrrideStyle}
                disabled={languages.length === 0}
            >
                <option selected disabled>
                    {languages.length === 0
                        ? "Languages not finded"
                        : "Choose language"}
                </option>
                {languages.map((language) => (
                    <option value={language.name}>{language.name}</option>
                ))};
            </Form.Select>
        );
    }
}

LanguagesDropDown.propTypes = {
    ovrrideStyle: PropTypes.string,
}

LanguagesDropDown.defaultProps = {
    ovrrideStyle: "",
}

export default LanguagesDropDown;
