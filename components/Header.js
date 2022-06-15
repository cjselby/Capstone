import html from "html-literal";

export default state => html`
  <header>
    <h1><a href="Home">The Date Deck ${state.header}</a></h1>
  </header>
`;
