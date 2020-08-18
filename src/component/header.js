class Navbar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    
    render(){
        this.innerHTML = `
        <nav class="navbar navbar-light bg-primary">
            <a class="navbar-brand">The Black Cinema</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Cari Film" aria-label="Search" id="searchItems">
                <button class="btn btn-outline-success my-2 my-sm-0" id="buttonSearch" type="submit">Cari</button>
            </form>
        </nav>
        `;
    }
}

customElements.define("nav-bar",Navbar);