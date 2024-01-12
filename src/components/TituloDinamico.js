class TituloDinamico extends HTMLElement {
    constructor() {
        super ()
        const shadow = this.attachShadow({mode:"open"})

        //base do componente 
        const componentRoot = document.createElement("h1")
        componentRoot.textContent = "titulo teste"

        // style do componente
        const style = document.createElement("style")
        style.textContent = `
        h1{
            color:red;
        }
        `

        //enviar para a shadow
        shadow.appendChild(componentRoot)
    }
}

customElements.define("oioi", TituloDinamico)