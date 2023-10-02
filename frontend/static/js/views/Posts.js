import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
    <h1>Posts</h1>
    <p>
      You're viewing the posts!
        google shmebulock
      </p>
      <p>
      <a href="/settings" data-link>Check the settings cfg</a>.
      </p>
    `;
  }
}
