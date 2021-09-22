import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";

export class CategoriesDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    async componentDidMount() {
        // Geting list of category from API

        try {
            const response = await axios.get("/task/get_category/");
            this.setState({ categories: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { categories } = this.state;
        return (
            <Form.Select
                className={this.props.className}
                disabled={categories.length === 0}
            >
                <option selected disabled>
                    {categories.length === 0
                        ? "Categories not finded"
                        : "Choose category"}
                </option>
                {categories.map((category) => (
                    <option value={category.name}>{category.name}</option>
                ))};
            </Form.Select>
        );
    }
}

export default CategoriesDropDown;
