import axios from "axios";
import React, { Component } from "react";
import { Table, Row } from "react-bootstrap";
import delete_logo from "./images/delete_logo.png";
import zoom_logo from "./images/zoom_logo.png";
import edit_logo from "./images/edit_logo.png";
import RolesDropDown from "./RolesDropDown";

class UsersTable extends Component {
    state = {
        users: []
    }

    async componentDidMount() {
        try {
            const usersData = await axios.get("api/user/users/");
            this.setState({ users: usersData.data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { users } = this.state;

        return (
            <div class="grey">
                <h3 class="text-center type text-white">Manage Users</h3>
                <div class="container grey">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>NICKNAME</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ADDED</th>
                                <th>
                                    <RolesDropDown />
                                </th>
                                <th>STATUS</th>
                                <th>MANAGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td className="underline-on-hover">
                                            <a href="#">{user.nickname}</a>
                                        </td>
                                        <td>{user.first_name + " " + user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.created_at.slice(0, 10).split("-").reverse().join("-") +
                                                " " + user.created_at.slice(11, 19)}
                                        </td>
                                        <td>{user.role_id}</td>
                                        <td>{user.status}</td>
                                        <td>
                                            <a href="#">
                                                <img src={zoom_logo} />
                                            </a>
                                            <a href="#">
                                                <img src={edit_logo} />
                                            </a>
                                            <a href="#">
                                                <img src={delete_logo} />
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
                <Row></Row>
            </div>
        );
    }
}
export default UsersTable;
