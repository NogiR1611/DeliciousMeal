class Footer extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <footer>
                <p>Delicious Meal &copy; 2020</p>
            </footer>
        `;
    }
}

customElements.define("footer-element",Footer);