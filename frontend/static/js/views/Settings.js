import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
    <h1>Linux basics for hackers</h1>
    <h4>thugger once said that girls play more games than the nba so keep coding</h4>
    <p>
     This is the settings page.
      </p>
      <p>
      <a href="/" data-link>Back to dashboard</a>.
      </p>
    `;
  }
}
