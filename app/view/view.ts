export class View{
    
    private elemento:HTMLElement

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }
    
    private template(link: string): string{
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

    update(link: string): void{
        const template = this.template(link);
        this.elemento.innerHTML = template;
    }
}