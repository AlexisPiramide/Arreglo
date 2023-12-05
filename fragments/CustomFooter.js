class CustomFooter extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
      <footer>
        <a href="https://twitter.com/rickroll?lang=es"><img src="/fragments/img/Twitter.png" link></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="/fragments/img/Youtube.png" link></a>
        <a href="https://www.facebook.com/rickroll548/?locale=es_LA"><img src="/fragments/img/Facebook.png" link></a>
      </footer>
      `;
    }
  }
  
  window.customElements.define('custom-footer', CustomFooter)