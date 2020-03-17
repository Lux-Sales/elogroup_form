import React, { Component } from "react";
import axios from "axios"
import InputFullName from "../inputFullName";
import InputCellphone from "../inputCellphone";
import InputHasSocialMedia from "../inputHasSocialMedia";
import SelectKnowUs from "../selectKnowUs";
import Swal from "sweetalert2"


class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: "",
                cellphone: "",
                media_facebook: false,
                media_linkedin: false,
                media_instagram: false,
                how_meet: "",
                socialMediaSelected: false
            },
            sended: false
        };
    }
    validateData() {
        const { name, cellphone, how_meet, socialMediaSelected } = this.state.form
        const arrayName = name.trim().split(" ")
        if (arrayName.length < 2) {
            if (arrayName.length === 0)
                Swal.fire({ title: "Heey!", icon: "warning", text: "Informe nome e sobrenome" })
            else if (arrayName.length === 1)
                Swal.fire({ title: "Heey!", icon: "warning", text: "Informe sobrenome" })
            return false;
        }
        if (cellphone === "" || cellphone.length < 13) {
            Swal.fire({ title: "Heey!", icon: "warning", text: "Informe número de telefone" })
            return false;
        }
        if (!socialMediaSelected) {
            Swal.fire({ title: "Heey!", icon: "warning", text: "Informe se possui rede social" })
            return false;
        }
        if (how_meet == "") {
            Swal.fire({ title: "Heey!", icon: "warning", text: "Informe como conheceu" })
            return false;
        }
        return true;
    }
    onSubmit(event) {
        event.preventDefault()
        if (this.validateData()) {
            const form = this.state.form
            let socialMedias = [];
            if (form.media_facebook) socialMedias.push("Facebook")
            if (form.media_instagram) socialMedias.push("Instagram")
            if (form.media_linkedin) socialMedias.push("Linkedin")
            let data = {
                nome: form.name,
                telefone: form.cellphone,
                como_conheceu: form.how_meet
            }
            if (socialMedias.length > 0) data = {
                ...data, redes_sociais: socialMedias
            }
            axios.post("http://localhost:8080/", data)
                .then((response) => {
                    Swal.fire({ title: "Tudo Certo!", icon: "success", text: "Formulario submetido com sucesso!" })
                })
                .catch((error) => {
                    Swal.fire({ title: "Oops!", icon: "error", text: "Algo deu errado! Não foi possível enviar o formulário." })
                }).finally(() => {
                    this.setState({
                        sended: true
                    })
                });
        }
    }
    handleFullName(fullName) {
        this.setState({
            form: { ...this.state.form, name: fullName }
        })
    }
    handleCellphone(cellphone) {
        this.setState({
            form: { ...this.state.form, cellphone: cellphone.replace("_", "") }
        })
    }
    handleSocialMediaSelected(socialMediaSelected) {
        this.setState({
            form: { ...this.state.form, socialMediaSelected: socialMediaSelected }
        })
    }
    resetSocialMedias() {
        this.setState({
            form: {
                ...this.state.form,
                media_facebook: false,
                media_linkedin: false,
                media_instagram: false
            }
        })
    }
    handleSocialMedia(socialMedia) {//socialMedia = "media_facebook" || socialMedia = "media_linkedin" || socialMedia = "media_instagram"
        this.setState({
            form: {
                ...this.state.form,
                [socialMedia]: !this.state.form[socialMedia]
            }
        })
    }
    handleKnowUs(howKnow) {
        this.setState({
            form: {
                ...this.state.form,
                how_meet: howKnow
            }
        })
    }

    render() {
        return (
            <form>
                <h2>Digite seus dados:</h2>
                <InputFullName handleFullName={this.handleFullName.bind(this)}>
                </InputFullName>
                <br />
                <InputCellphone handleCellphone={this.handleCellphone.bind(this)}>
                </InputCellphone>
                <br />
                <InputHasSocialMedia resetSocialMedias={this.resetSocialMedias.bind(this)}
                    handleSocialMedia={this.handleSocialMedia.bind(this)}
                    handleSocialMediaSelected={this.handleSocialMediaSelected.bind(this)}>
                </InputHasSocialMedia>
                <SelectKnowUs handleKnowUs={this.handleKnowUs.bind(this)}>
                </SelectKnowUs>
                <br />
                <button style={{ marginLeft: "2rem" }} disabled={this.state.sended} onClick={(event) => this.onSubmit(event)}>Enviar</button>
            </form>
        );
    }

}
export default Formulario;