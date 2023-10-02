import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
    <h1>Welcome back, Dom</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      quas, voluptatum quibusdam, quia, doloribus officiis natus
      voluptatibus quos dolorum ipsam eveniet quidem? Quisquam, quos
      voluptatum? Voluptatibus, quibusdam. Quisquam, quos voluptatum?
      Voluptatibus, quibusdam.
      </p>
      <p>
      <a href="/posts" data-link>View recent posts</a>.
      </p>
    `;
  }
}
