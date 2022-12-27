import "./topbar.scss";
import { Person, Mail, Home } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <Home className="icon"></Home>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 480 486 0541</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span><a href="mailto:akbacon05@gmail.com">akbacon05@gmail.com</a>  </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
