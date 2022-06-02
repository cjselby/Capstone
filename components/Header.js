import html from "html-literal";
import skyPic from "../../assets/img/skydive.jpg";

export default state => html`
  <header>
    <h1>The Date Deck ${state.header}</h1>
    <img src="${skyPic}" />
  </header>
`;
