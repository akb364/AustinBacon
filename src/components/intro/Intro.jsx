import "./intro.scss";
import Typewriter from "typewriter-effect";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/enjoy.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Austin Bacon</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: ["Developer", "Designer", "Enthusiast"],
                  autoStart: true,
                  delay: "natural",
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="arrow"></KeyboardArrowDown>
        </a>
      </div>
    </div>
  );
}
