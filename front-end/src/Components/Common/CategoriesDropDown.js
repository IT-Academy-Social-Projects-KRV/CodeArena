import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export class CategoriesDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    async componentDidMount() {
        // Get categories from API

        try {
            const response = await axios.get("/api/task/get_category/");
            this.setState({ categories: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { categories } = this.state;
        const { selected } = this.props;
        return (
            <Form.Select
                className={this.props.overrideStyle}
                disabled={categories.length === 0}
            >
                <option selected disabled>
                    {categories.length === 0
                        ? "Categories not finded"
                        : "Choose category"}
                </option>
                {categories.map((category) => (
                    <option selected={selected === category.name} value={category.name}>{category.name}</option>
                ))};
            </Form.Select>
        );
    }
}

CategoriesDropDown.propTypes = {
    ovrrideStyle: PropTypes.string,
}

CategoriesDropDown.defaultProps = {
    ovrrideStyle: "",
}

export default CategoriesDropDown;
