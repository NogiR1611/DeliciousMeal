class Navbar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector("#searchItems").value;
    }
    
    render(){
        this.innerHTML = `
        <nav class="navbar navbar-light bg-primary">
            <a class="navbar-brand" style="color:white; font-size:24px;">Delicious Meal</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Seach Recipe Meal" aria-label="Search" id="searchItems">
                <button class="btn btn-outline-success my-2 my-sm-0" id="buttonSearch" type="button">Search</button>
            </form>
        </nav>
        `;
        this.querySelector("#buttonSearch").addEventListener("click",this._clickEvent);
    }
}

customElements.define("nav-bar",Navbar);