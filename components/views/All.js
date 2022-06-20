import html from "html-literal";
import winePic from "../../assets/img/wine.jpg";

export default () => html`
  <section id="allDates">
    <div id="content1">
      <h2>Group Dates</h2>
    </div>
    <div id="img1"></div>
    <div id="img2"></div>
    <div id="img3"></div>
    <div id="img4"></div>
    <div id="content2">
      <h2>Music & Art Dates</h2>
    </div>
    <div id="img5"></div>
    <div id="img6"></div>
    <div id="img7"></div>
    <div id="img8"></div>
    <div id="content3">
      <h2>Dinner and Drink Dates</h2>
    </div>
    <img id="img9" src="${winePic}" alt="wine" />
    <div id="img10"></div>
    <div id="img11"></div>
    <div id="img12"></div>
  </section>
`;
