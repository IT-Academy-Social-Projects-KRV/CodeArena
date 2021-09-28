import axios from "axios";
import React, { Component } from "react";
import { Form } from "react-bootstrap";

class RolesDropDown extends Component {
    state = {
        roles: []
    }

    async componentDidMount() {
        try {
            const rolesData = await axios.get("/api/user/roles/");
            this.setState({ roles: rolesData.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { roles } = this.state;
        return (
            <Form.Select>
                <option>Role</option>
                {roles.map((role) => (
                    <option value={role.name}>{role.name}</option>
                ))}
            </Form.Select>
        );
    }
}

export default RolesDropDown;
