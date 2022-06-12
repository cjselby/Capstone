import html from "html-literal";

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
    <h2>Group Dates</h2>
    <div id="secondImg">
      <h3>Bowling</h3>
    </div>
  </section>
  <section class="categorySection">
    <h2>Outdoor Dates</h2>
    <div id="hikeImg">
      <h3>Hiking</h3>
    </div>
  </section>
`;
