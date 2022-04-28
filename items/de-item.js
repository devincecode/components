class DeItem extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({mode: 'open'});

        const item = document.createElement('div');
        item.setAttribute('class', 'item')

        const style = document.createElement('style');
        style.textContent = `.item {
            width: 200px;
            height: 300px;
            background-color: #ccc;
        }`

        this.shadowRoot.append(style);
        this.shadowRoot.append(item);
    }
}

customElements.define('de-item', DeItem)