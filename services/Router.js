const Router = {
  init: () => {
    console.log(document.querySelectorAll("site-header"));
    console.log(document.querySelector("site-header").shadowRoot);

    document
      .querySelector("site-header")
      .shadowRoot.querySelectorAll(".navlink")
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const url1 = e.target.getAttribute("href");
          Router.go(url1);
        });
      });

    window.addEventListener("popstate", (e) => {
      Router.go(e.state.route, false);
    });

    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log("going to", route);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let pageEl = null;
    console.log(route);
    switch (route) {
      case "/":
        pageEl = document.createElement("cart-page");
        pageEl.textContent = "YOOO";
        break;
      case "/cart":
        pageEl = document.createElement("h1");
        pageEl.textContent = "SOOO";
        break;
    }

    if (pageEl) {
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageEl);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
