import React, { Component } from "react";
import "./App.css";

import Slideshow from "./components/Slideshow/Slideshow";
import img1 from "./assets/01.jpg";
import img2 from "./assets/02.jpg";
import img3 from "./assets/03.jpg";
import img4 from "./assets/04.jpg";
import img5 from "./assets/05.jpeg";
import img6 from "./assets/06.jpeg";

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
  { src: img5, caption: "Caption five" },
  { src: img6, caption: "Caption six" },
];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Slideshow input={collection} ratio={`3:2`} mode={`manual`} />

        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        />
      </div>
    );
  }
}
