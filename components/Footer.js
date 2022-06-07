import html from "html-literal";

let year = new Date().getFullYear();

export default () => html`
  <footer>
    &copy; ${year} <a href="https://github.com/cjselby/Capstone">Casey Selby</a>
    <div class="review">
      <ul>
        <li><a href="./Form">Submit a Review</a></li>
      </ul>
    </div>
  </footer>
`;
