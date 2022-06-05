import html from "html-literal";

export default () => html`
  <section id="improve">
    <form id="improve" method="POST" action="">
      <h2>Help us improve</h2>
      <div>
        <label for="likely"
          >How likely are you to recommend The Date Deck to a friend?</label
        >
        <select id="likely" name="likely">
          <option value="">1 - 10</option>
          <option value="ten">10 - Very likely</option>
          <option value="nine">9</option>
          <option value="eight">8</option>
          <option value="seven">7</option>
          <option value="six">6</option>
          <option value="five">5</option>
          <option value="four">4</option>
          <option value="three">3</option>
          <option value="two">2</option>
          <option value="one">1 - Not likely</option>
        </select>
      </div>
      <div>
        <label for="category">Outdoors date? Group date?</label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Enter Date Category"
          required
        />
      </div>
      <div>
        <label for="experience">Describe your experience:</label>
        <input
          type="text"
          name="experience"
          id="experience"
          placeholder="Please share your experience"
          required
        />
      </div>
      <div>
        <label for="interests"
          >What date categories are you interested in? Select all that
          apply.</label
        >
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="interests"
          value="outdoor"
        />
        <label for="int1">Outdoor Dates</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="interests"
          value="group"
        />
        <label for="int2">Group Dates</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="interests"
          value="artMusic"
        />
        <label for="int3">Art/Music</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="items1"
          name="interests"
          value="atHome"
        />
        <label for="int4">At home</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="interests"
          value="dinnerDrinks"
        />
        <label for="int5">Dinner/Drinks</label>
      </div>
      <input
        type="hidden"
        name="customer"
        id="customer"
        value="Anonymous Customer"
      />
      <input type="submit" name="submit" value="Submit Pizza" />
    </form>
  </section>
`;
