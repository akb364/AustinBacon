import "./intro.scss";
import Typewriter from "typewriter-effect";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="top">
        <div className="wrapper">
          <div className="putLeft">
          <h1>Hi, I'm Austin Bacon</h1>
              <hr className="hr"></hr>
          <h1>Welcome to my portfolio</h1>

          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
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
        <a href="#portfolio">
          <KeyboardArrowDown className="arrow"></KeyboardArrowDown>
        </a>
        </div>
      </div>
    </div>
  );
}
