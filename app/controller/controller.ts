import { Model } from "../model/model.js";
import { View } from "../view/view.js";

export class Controller{

    private model: Model = new Model("#tel", "#text");
    private view: View = new View("#resultado");
    private formulario = document.querySelector("#formulario");

    criarLink(){
        const url: string = this.model.getUrl();
        const ddi: string = this.model.getDdi();
        let telefone: string = this.model.getTelefone();
        const urlText: string = this.model.getUrlText();
        let text: string = this.model.getText();
        
        //Validação de telefone
        if(telefone.includes("(") || telefone.includes(")")){
            telefone = telefone.replace("(", "");
            telefone = telefone.replace(")", "");
        }
        else if(telefone.includes("-")){
            telefone = telefone.replace(/-/g, "")
        }

        //Validação texto
        if(text.includes(" ")){
            text = text.replace(/ /g, "+");
        }
        else if(text.includes("?")){
            text = text.replace(/"?"/g, "+?")
        }

        //gerar link
        const link = url + ddi + telefone + urlText + text;

        this.removerFormulario();

        this.criarView(link);
    }

    criarView(link: string){
        this.view.update(link)
    }

    removerFormulario(): void{
        const formulario = this.formulario;
        formulario.classList.add("close");
    }

}