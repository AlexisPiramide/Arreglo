class CustomNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <nav>
        <div>
            <img src="/fragments/img/Logo.png" alt="">
            <img src="/fragments/img/Menu.png" alt="">
        </div>
        <h2><a href="#">Inicio</a></h2>
        <div class="navegador">
            <input type="text" placeholder="">
            <button type="submit">
                <img src="/fragments/img/Search.png" onmouseover="this.src='/fragments/img/AlternativeSearch.png'"
                    onmouseout="this.src='/fragments/img/Search.png'">
            </button>
        </div>
        <h2><a href="eleccion2.html"> Seccion Articulos</a></h2>
        <div class="usuario">
            <a href="/fragments/eleccion.html">
                <img src="/fragments/img/User.png">
                <h2>Zona<br> Usuario</h2>
            </a>
        </div>
        <div>
            <img src="/fragments/img/Logo.png" alt="">
        </div>
    </nav>
      `;
    }
}

window.customElements.define('custom-nav', CustomNav)