class ButtonScreens extends HTMLElement {
  constructor() {
    super();

    console.log('Button screen')

    const shadowRoot = this.attachShadow({mode: 'open'})

    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = 'hello world';

    shadowRoot.appendChild(buttonElement);
  }
}

customElements.define('button-screen', ButtonScreens)
