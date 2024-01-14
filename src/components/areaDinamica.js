class AreaDinamica extends HTMLElement {
    constructor() {
        super() 
        const shadow = this.attachShadow({mode:"open"})
        shadow.appendChild(this.buildHTML())
        shadow.appendChild(this.style())
        

    }

    buildHTML() {
        const componentRoot = document.createElement("div")
        componentRoot.classList.add("container-areas")
        const nav = document.createElement("nav")
        const containerAreas = document.createElement("div")
        containerAreas.classList.add("areas")
        componentRoot.appendChild(nav)
        componentRoot.appendChild(containerAreas)

        const areasNames = this.getAttribute("areas")
        
        for (let sectionName of areasNames.split(' ')) {
            const area = document.createElement(`div`)
            area.classList.add(`area_${sectionName}`)

            const btn = document.createElement("button")
            btn.classList.add(`btn_${sectionName}`)
            btn.textContent = sectionName
            btn.onclick = () => {
                nav.querySelectorAll("button").forEach(b => b.classList.remove("ativo"))
                btn.classList.add("ativo")
        
                containerAreas.querySelectorAll("div").forEach(a => a.classList.remove("ativo"))
                area.classList.add("ativo")
            }
            
            const mainContent = document.createElement("main")
            mainContent.classList.add(sectionName)
            mainContent.textContent = this.getAttribute(sectionName) || `no content in ${sectionName}`

            area.appendChild(mainContent)
            nav.appendChild(btn)
            containerAreas.appendChild(area)
        }


        return componentRoot
    }


    style() {
        const style = document.createElement("style")
        style.textContent = `
        nav {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            padding: 20px;
            padding-bottom: 0px;
            justify-content: space-around;
            align-items: center;
        }
        
        nav button{
            background: none;
            border: none;
            padding-bottom: 10px;
            z-index: 1000000;
        }
        
        nav button.ativo {
            border-bottom: 4px solid #6c79db ;
        
        }
        
        .areas {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            height: fit-content;
            
        }
        
        .areas div{
            width: 0vw;
            height: 55vh;
            overflow-y: auto;
            transition: width 0.2s ease-in-out;
            overflow-x: hidden;
        }
        
        .areas div.ativo{
            width: 100vw;
            
        }
        
        .areas div main  {
            width: 100vw;
            
        }`
        return style
    }
}

customElements.define("area-dinamica",AreaDinamica)