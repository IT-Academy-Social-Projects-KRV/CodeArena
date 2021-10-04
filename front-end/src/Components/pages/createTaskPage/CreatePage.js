import { Component } from "react"
import Functional from "./Functional"
import MainMenu from "./MainMenu"

export default class CreatePage extends Component {
    render() {
        return (
            <div className="grey">
                <Functional />
                <MainMenu />
            </div>

        )
    }
}
