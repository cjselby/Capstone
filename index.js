import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
`;

  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  console.log("capstone-:state.view", state.view);

  if (state.view === "Form") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      const interests = [];
      for (let input of inputList.interests) {
        if (input.checked) {
          interests.push(input.value);
        }
      }
      const requestData = {
        likely: inputList.likely.value,
        category: inputList.category.value,
        experience: inputList.experience.value,
        interests: interests,
        customer: ""
      };
      axios
        .post(`${process.env.CAPSTONE_API_URL}`, requestData)
        .then(response => {
          console.log(response.data);
          store.Review.reviews.push(response.data);
          router.navigate("/Review");
        })
        .catch(error => {
          console.log("Error", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    let view = "Home";
    if (params && params.data && params.data.view) {
      view = capitalize(params.data.view);
    }
    if (view === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
        )
        .then(response => {
          const kelvinToFahrenheit = kelvinTemp =>
            Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

          store.Home.weather = {};
          store.Home.weather.city = response.data.name;
          store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
          store.Home.weather.feelsLike = kelvinToFahrenheit(
            response.data.main.feels_like
          );
          store.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    } else if (view === "Pizza") {
      axios
        .get(`${process.env.CAPSTONE_API_URL}`)
        .then(response => {
          store.Review.reviews = response.data;
          done();
        })
        .catch(error => {
          console.log("It puked", error);
          done();
        });
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
