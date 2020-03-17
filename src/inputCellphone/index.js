import React, { Component } from "react";
import InputMask from "react-input-mask"

export default class InputCellphone extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <label htmlFor="telefone_contato">Telefone de contato:</label>
            <InputMask type="text"
                required="required"
                placeholder="99 – 99999999"
                name="cellphone"
                mask="99 – 99999999"
                onChange={(event) => {
                    this.props.handleCellphone(event.target.value)
                }}
            ></InputMask></div>)
    }
}