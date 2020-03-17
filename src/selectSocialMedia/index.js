import React, { Component } from "react";

export default class SelectSocialMedia extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>Quais?</p>
                <label htmlFor="socialMedias"> <input type="checkbox" name="socialMedias" onChange={(event) => {
                    this.props.handleSocialMedia("media_facebook")
                }} />
                    Facebook</label>
                <br />
                <label htmlFor="socialMedias"> <input type="checkbox" name="socialMedias" onChange={(event) => {
                    this.props.handleSocialMedia("media_linkedin")

                }} />
                    Linkedin</label>
                <br />
                <label htmlFor="socialMedias"> <input type="checkbox" name="socialMedias" onChange={(event) => {
                    this.props.handleSocialMedia("media_instagram")
                }} />
                    Instagram</label>

            </div>)
    }
}