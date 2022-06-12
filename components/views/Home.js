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
      <a href="index.html">Explore all date categories</a>
    </div>
  </section>
  <section class="categorySection">
    <section id="groupSection">
      <h2>Group Dates</h2>
      <div id="secondImg">
        <h3>Bowling</h3>
        <img src="${bowlingPic}" alt="bowling alley" />
      </div>
      <div id="thirdImg">
        <h3>Softball</h3>
        <img src="${softballPic}" alt="group of people playing softball" />
      </div>
    </section>
    <section id="outdoorSection">
      <h2>Outdoor Dates</h2>
      <div id="hikeImg">
        <h3>Hiking</h3>
        <img src="${hikePic}" alt="couple hiking" />
      </div>
    </section>
  </section>
`;
