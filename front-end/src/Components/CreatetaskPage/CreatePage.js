import { Component } from "react"
import FooterBl from "../BlackFooter/Footer"
import Functional from "./Functional"
import Main_menu from "./Main_menu"


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