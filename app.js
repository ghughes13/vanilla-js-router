import Router from "./services/Router.js";
import CartPage from "./components/Cart.js";
import SiteHeader from "./components/Header.js";
import Footer from "./components/Footer.js";

window.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
});
