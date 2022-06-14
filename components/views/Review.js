import html from "html-literal";

export default st => `
<table id="reviews">
<tr><th>Likely</th><th>Category</th><th>Experience</th><th>Interests</th><th>Customer</th></tr>
${st.reviews
  .map(review => {
    return `<tr><td>${review.likely}</td><td>${review.category}</td><td>${
      review.experience
    }</td><td>${review.interests.join(" & ")}</td><td>${
      review.customer
    }</td></tr>`;
  })
  .join("")}

</table>
`;
