import html from "html-literal";
import sunsetPic from "../../assets/img/sunset.jpg";

export default state => html`
  <section id="jumbotron">
    <h2>The Date Deck</h2>
    <img src="${sunsetPic}" alt="Couple Watching the Sunset" />
    <p id="description">
      Whether you're looking for adventurous date ideas, group dates, date ideas
      by season or at-home date ideas, we've got you covered.
    </p>
    <a href="index.html">Generate a Date</a>
  </section>
`;
