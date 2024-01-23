class Cardnews extends HTMLElement{
  constructor(){
    super()

    const shadow = this.attachShadow({mode: "open"})
    shadow.appendChild(this.build())
    shadow.appendChild(this.style())
  }
  
  build(){
    const componentContainer = document.createElement('div')
    componentContainer.setAttribute('class', 'container')
    
    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'card')
    
    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card-left')

    const linkTitle = document.createElement('a')
    linkTitle.setAttribute('target', '_blank')
    linkTitle.textContent = this.getAttribute('title')
    linkTitle.href = this.getAttribute('titleLink') || "https://www.pixilart.com/"
    
    const newsContent = document.createElement('p')
    newsContent.textContent = this.getAttribute('content')

    const autor = document.createElement('span')
    const autorLink = document.createElement('a')
    autorLink.setAttribute('target', '_blank')

    autorLink.href = this.getAttribute('autorLink') || "https://www.github.com/"
    autorLink.textContent = 'By ' + (this.getAttribute('autor') || "Anonymous")
    
    

    
    componentContainer.appendChild(componentRoot)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsContent)
    cardLeft.appendChild(autor)
    autor.appendChild(autorLink)

    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card-right')
    
    const newsImg = document.createElement('img')
    newsImg.src = this.getAttribute('img') || "assets/img/defaut-photo.png"
    cardRight.appendChild(newsImg)
        
    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentContainer
  }

  style(){
    const style = document.createElement('style')
    style.textContent = `
    .container {
      max-width: 100%;
      width: 70vw;
      margin: 10px;
    }
    
    .card {
      display: flex;
      justify-content: space-between;
      width: 90%
      height: 250px;
      margin: 0 auto;
      margin-top: 10px;
      border-radius: 10px;
      background-color: wheat;
    
      -webkit-box-shadow: 4px 1px 34px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 4px 1px 34px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 4px 1px 34px 0px rgba(0, 0, 0, 0.75);
    }
    
    .card-left {
      display: flex;
      flex-direction: column;
      max-width: 50%;
    }
    
    .card-right {
      margin-top: 0.5rem;
      margin-right: 0.5rem;
    }
    
    .card-left>a {
      font-size: 2rem;
      font-weight: 600;
      text-decoration: none;
      color: black;
      margin: 25px 0px 0px 25px;
    }
    
    .card-left>p {
      color: rgb(46, 44, 44);
      margin: 25px;
    }
    
    .card-left span{
      height: 100%;
    }
    
    .card-left>span>a {
      display: flex;
      justify-content: left;
      align-items: end;
      margin: 0px 0px 5px 30px;
      color: rgb(113, 113, 113);
      text-decoration: none;
      height: 70%;
    }
    
    .card-right img {
      max-width: 400px;
      width: 99%;
      max-height: 300px;
      height: 95%;
      border-radius: 40px 0 40px 0;
    }
    `
    return style
  }
}

customElements.define("card-news", Cardnews)