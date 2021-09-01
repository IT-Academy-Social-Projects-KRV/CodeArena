import { Component } from "react"
import Functional from "./Functional"
import Main_menu from "./Main_menu"
import FooterBl from "../../Footer/FooterBl"


export default class CreatePage extends Component {
    render() {
        return (
            <div>
                <Functional />
                <Main_menu />
                <FooterBl />
            </div>

        )
    }
}