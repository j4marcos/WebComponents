class CardNews extends HTMLElement{
    constructor() {
        super()
        const shadow = this.attachShadow({mode:"open"})
        shadow.appendChild(this.buildElement())
        shadow.appendChild(this.styles())

    }
    buildElement() {
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class","card")
        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class","card__left")

        const autor = document.createElement("span")
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const linkTittle = document.createElement("a")
        linkTittle.textContent = this.getAttribute("title")
        linkTittle.href = this.getAttribute("link-url") || "#"

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTittle)
        cardLeft.appendChild(newsContent)

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class","card__right")
        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute("img-news") || "https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        cardRight.appendChild(newsImage)
        
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        
        return componentRoot
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `

        .card {
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          
          .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
          }
          
          .card__left > span {
            font-weight: 400;
          }
          
          .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
          
          .card__left > p {
            color: rgb(70, 70, 70);
          }
        
        `

        return style
    }
}

// sempre precisa criar o nome do custom elemente contendo "-"
customElements.define("card-news", CardNews)


