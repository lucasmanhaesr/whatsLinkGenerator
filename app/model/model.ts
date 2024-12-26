export class Model{
    
    private url: string = "https://wa.me/";
    private ddi: string = "55"
    private telefone: HTMLInputElement;
    private urlText: string = "?text="
    private text: HTMLInputElement;
    
    constructor(seletorTelefone: string, seletorText: string){
        this.telefone = document.querySelector(seletorTelefone);
        this.text = document.querySelector(seletorText);
    }

    getUrl(): string{
        return this.url;
    }

    getDdi(){
        return this.ddi;
    }

    getTelefone(): string{
        return this.telefone.value
    }

    getUrlText(): string{
        return this.urlText;
    }

    getText(): string{
        return this.text.value;
    }
    
}