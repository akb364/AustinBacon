import "./contact.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import logo from "../../assets/logo.png"

export default function Contact() {
  const [messageOn, setMessageOn] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eb260kp",
        "template_42dhsw4",
        form.current,
        "Kii4Ta6FGln6vhq_e"
      )
      .then(
        (result) => {
          swal({
            title: "Success!",
            text: "Message Sent",
            button: "Sweet!",
          });
          e.target.reset();
        },
        (error) => {
          swal({
            title: "Uh oh!",
            text: "Something went wrong, but you can still email me by clicking my email on the nav bar.",
            icon: "error",
            button: "OK",
          });
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Email" name="user_email" />
          <input
            type="text"
            placeholder="Organization"
            name="user_organization"
          />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {messageOn && <span>Thanks, I will reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
