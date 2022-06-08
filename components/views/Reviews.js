import html from "html-literal";

export default st => `
<section id="rev">What couples are saying</section>
<table id="pizzas">
<tr><th>Likely</th><th>Category</th><th>Experience</th><th>Interests</th><th>Customer</th></tr>
${st.pizzas
  .map(pizza => {
    return `<tr><td>${pizza.likely}</td><td>${pizza.category}</td><td>${
      pizza.experience
    }</td><td>${pizza.interests.join(" & ")}</td><td>${
      pizza.customer
    }</td></tr>`;
  })
  .join("")}

</table>
`;
