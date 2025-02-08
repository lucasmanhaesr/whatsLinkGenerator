export class Model {
    constructor(seletorTelefone, seletorText) {
        this.url = "https://wa.me/";
        this.ddi = "55";
        this.urlText = "?text=";
        this.telefone = document.querySelector(seletorTelefone);
        this.text = document.querySelector(seletorText);
    }
    getUrl() {
        return this.url;
    }
    getDdi() {
        return this.ddi;
    }
    getTelefone() {
        return this.telefone.value;
    }
    getUrlText() {
        return this.urlText;
    }
    getText() {
        return this.text.value;
    }
}
