import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/AustinHeadshot.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Austin Bacon</h1>
          <h3>
            React
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
          <img src="assets/down.png" alt="down arrow"></img>
        </a>
      </div>
    </div>
  );
}
