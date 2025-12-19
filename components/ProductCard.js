const template = `
<div>
<div id="product-item"></div>
</div>`;

class ProductCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const templateElement = document.createElement("template");
    templateElement.innerHTML = template;
    shadow.appendChild(templateElement.content.cloneNode(true));
  }

  set productCardItem(product) {
    console.log(product);
    const cartItemsList = this.shadowRoot.querySelector("#product-item");
    cartItemsList.innerHTML = ""; // Clear previous content if necessary

    const li = document.createElement("p");
    li.textContent = `${product.name} - $${product.price}`;
    cartItemsList.appendChild(li);
  }
}

customElements.define("product-card", ProductCard);

export default ProductCard;
