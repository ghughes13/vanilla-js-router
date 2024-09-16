const template = `
<style>
  h1 {
    font-size: 5em;
    color: red;
  }
</style>
<div>
<h1>Shopping Cart</h1>
<ul id="cart-items"></ul>
<button id="checkout-button">Checkout</button>
</div>`;

class CartPage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const templateElement = document.createElement("template");
    templateElement.innerHTML = template;
    shadow.appendChild(templateElement.content.cloneNode(true));
  }
}

customElements.define("cart-page", CartPage);

export default CartPage;
