import { Model } from "../model/model.js";
import { View } from "../view/view.js";
export class Controller {
    constructor() {
        this.model = new Model("#tel", "#text");
        this.view = new View("#resultado");
        this.formulario = document.querySelector("#formulario");
    }
    criarLink() {
        const url = this.model.getUrl();
        const ddi = this.model.getDdi();
        let telefone = this.model.getTelefone();
        const urlText = this.model.getUrlText();
        let text = this.model.getText();
        //Validação de telefone
        if (telefone.includes("(") || telefone.includes(")")) {
            telefone = telefone.replace("(", "");
            telefone = telefone.replace(")", "");
        }
        else if (telefone.includes("-")) {
            telefone = telefone.replace(/-/g, "");
        }
        //Validação texto
        if (text.includes(" ")) {
            text = text.replace(/ /g, "+");
        }
        else if (text.includes("?")) {
            text = text.replace(/"?"/g, "+?");
        }
        //gerar link
        const link = url + ddi + telefone + urlText + text;
        this.removerFormulario();
        this.criarView(link);
    }
    criarView(link) {
        this.view.update(link);
    }
    removerFormulario() {
        const formulario = this.formulario;
        formulario.classList.add("close");
    }
}
