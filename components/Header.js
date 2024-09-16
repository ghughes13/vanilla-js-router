const template = `
<style>
  nav {
    background-color: #333;
    color: white;
    padding: 1em;
  }

  nav a {
    color: white;
    text-decoration: none;
    margin: 0 1em;
  }
</style>
<nav>
  <a href="/" class="navlink">Home</a>
  <a href="/cart" class="navlink">Cart</a>
  <a href="/checkout" class="navlink">Checkout</a>
</nav>`;

class SiteHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const templateElement = document.createElement("template");
    templateElement.innerHTML = template;
    shadow.appendChild(templateElement.content.cloneNode(true));
  }
}

customElements.define("site-header", SiteHeader);

export default SiteHeader;
