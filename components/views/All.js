import html from "html-literal";
import sailPic from "../../assets/img/sailing.jpg";
import bonfirePic from "../../assets/img/groupbonfire.jpg";
import pokerPic from "../../assets/img/poker.jpg";
import fairPic from "../../assets/img/fair.jpg";
import concertPic from "../../assets/img/concert.jpg";
import paintPic from "../../assets/img/paint.jpg";
import museumPic from "../../assets/img/museum.jpg";
import potteryPic from "../../assets/img/pottery.jpg";
import winePic from "../../assets/img/wine.jpg";
import cookPic from "../../assets/img/cooking.jpg";
import milkshakePic from "../../assets/img/milkshake.jpg";
import picnicPic from "../../assets/img/picnic.jpg";

export default () => html`
  <section id="allDates">
    <div id="content1">
      <h2>Group Dates</h2>
    </div>
    <img id="img1" alt="sailing" />
    <img id="img2" src="${bonfirePic}" alt="bonfire" />
    <img id="img3" src="${pokerPic}" alt="poker" />
    <img id="img4" src="${fairPic}" alt="fair" />
    <div id="content2">
      <h2>Music & Art Dates</h2>
    </div>
    <img id="img5" src="${concertPic}" alt="concert" />
    <img id="img6" src="${paintPic}" alt="painting" />
    <img id="img7" src="${museumPic}" alt="museum" />
    <img id="img8" src="${potteryPic}" alt="pottery" />
    <div id="content3">
      <h2>Dinner and Drink Dates</h2>
    </div>
    <img id="img9" src="${winePic}" alt="wine" />
    <img id="img10" src="${cookPic}" alt="cooking" />
    <img id="img11" src="${milkshakePic}" alt="milkshake cheers" />
    <img id="img12" src="${picnicPic}" alt="picnic" />
  </section>
`;
