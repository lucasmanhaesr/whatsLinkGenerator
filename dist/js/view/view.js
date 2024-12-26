export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(link) {
        return `
        <div class="card center">
            <div class="card-header">
              Link gerado!
            </div>
            <div class="card-body">
              <p class="card-text">Clique no botão abrir logo abaixo para iniciar sua conversa:</p>
              <a href="${link}" target="_blank" class="btn btn-success">Abrir</a>
              <button type="button" class="btn btn-primary" onclick="recarregarPagina()">Gerar outro link</button>
            </div>
        </div>
        `;
    }
    update(link) {
        const template = this.template(link);
        this.elemento.innerHTML = template;
    }
}
