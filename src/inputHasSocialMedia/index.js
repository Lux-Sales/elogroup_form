import React, { Component } from "react";
import SelectSocialMedia from "../selectSocialMedia";

export default class InputHasSocialMedia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasSocialMedia: false
        }

    }

    render() {
        return (<div>
            <div>
                <p>Possui rede social?</p>
                <label htmlFor="media_yes" >
                    <input id="media_yes" type="radio" name="option" onChange={(event) => {
                        this.setState({
                            hasSocialMedia: true
                        }, ()=>this.props.handleSocialMediaSelected(true)
                        )
                    }} />Sim
            </label>

                <label htmlFor="media_no">
                    <input id="media_no" type="radio" name="option" onChange={(event) => {
                        this.setState({
                            hasSocialMedia: false
                        }, () => {
                            this.props.resetSocialMedias()
                            this.props.handleSocialMediaSelected(true)
                        })

                    }} />Nao
    </label>
            </div>
            {this.state.hasSocialMedia && (
                <SelectSocialMedia handleSocialMedia={this.props.handleSocialMedia} >
                </SelectSocialMedia>
            )}
        </div>)

    }
}