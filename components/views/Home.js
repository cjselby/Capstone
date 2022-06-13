import html from "html-literal";
import bowlingPic from "../../assets/img/bowling.jpg";
import softballPic from "../../assets/img/softball.jpg";
import hikePic from "../../assets/img/hike.jpg";

export default state => html`
  <section id="jumbotron">
    <div class="jumboImg">
      <h2>Not your average date night</h2>
      <p>
        Whether you're looking for adventurous dates, group dates or at-home
        dates, we've got you covered.
      </p>
      <a href="All">Explore all date categories</a>
    </div>
  </section>
  <section id="allDates">
    <div id="content1">
      <a href="Groups">Group Date Ideas</a>
    </div>
    <div id="img1"></div>
    <div id="img2"></div>
    <div id="img3"></div>
    <div id="img4"></div>
    <div id="content2">
      <a href="Art">Music & Art Date Ideas</a>
    </div>
    <div id="img5"></div>
    <div id="img6"></div>
    <div id="img7"></div>
    <div id="img8"></div>
    <div id="content3">
      <a href="Outdoors">Outdoor Date Ideas</a>
    </div>
    <div id="img9"></div>
    <div id="img10"></div>
    <div id="img11"></div>
    <div id="img12"></div>
  </section>
`;
