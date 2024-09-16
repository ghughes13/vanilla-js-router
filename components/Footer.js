const template = `
<style>
  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em 0;
  }
</style>
<footer>
  <p>&copy; 2024 My E-commerce Site</p>
</footer>`;

class SiteFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const templateElement = document.createElement("template");
    templateElement.innerHTML = template;
    shadow.appendChild(templateElement.content.cloneNode(true));
  }
}

customElements.define("site-footer", SiteFooter);

export default SiteFooter;
