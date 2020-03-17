import React, { Component } from "react";

export default class SelectKnowUs extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <p>Como nos conheceu?</p>
            <select required name="howMeet" onChange={(event) => {
                this.props.handleKnowUs(event.target.value)
            }}>
                <option defaultValue value="">Selecione a opcao</option>
                <option value="Tv">Tv</option>
                <option value="Internet">Internet</option>
                <option value="Outros">Outros</option>
            </select>
        </div>)
    }
}