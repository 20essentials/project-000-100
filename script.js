/* ********************* COMPONENT CARD ***************** */

function obtenerFavicon(dominio) {
  return `https://www.google.com/s2/favicons?domain=${dominio}&sz=128`;
}

class ItemLink extends HTMLElement {
  #name = this.getAttribute("name");
  #url = this.getAttribute("url");
  #selfsrc = this.getAttribute("selfsrc");
  #circle = this.getAttribute("circle");

  connectedCallback() {
    this.innerHTML = `
      <a href='${this.#url}' title='${
      this.#name
    }' target='_blank' rel='noopener'>
        <img src='${
          this.#selfsrc ? this.#selfsrc : obtenerFavicon(this.#url)
        }' alt='${this.#name}'>
      </a>
    `;
  }
}

customElements.define("item-link", ItemLink);
