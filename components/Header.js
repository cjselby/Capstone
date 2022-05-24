import html from "html-literal";

export default state => html`
  <header>
    <h1>The Date Bucketlist: ${state.header}</h1>
  </header>
`;
