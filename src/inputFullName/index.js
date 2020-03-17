import React, { Component } from "react";

export default class InputFullName extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <label htmlFor="fullName">Nome e sobrenome:</label>
                <input
                    required="required"
                    type="text"
                    name="fullName"
                    onChange={(event) => {
                        this.props.handleFullName(event.target.value)
                    }}
                ></input>
            </div>
        )
    }
}