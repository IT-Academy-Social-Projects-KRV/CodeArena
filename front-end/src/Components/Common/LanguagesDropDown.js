import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";

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
            const response = await axios.get("/task/get_languag/");
            this.setState({ languages: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { languages } = this.state;
        return (
            <Form.Select
                className={this.props.className}
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

export default LanguagesDropDown;
