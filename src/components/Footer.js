import React from "react";
import footerImage from "../images/News-footer.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <img id="footer__image" src={footerImage} alt="img"></img>
      <h5>Developed by · Andrei Alvarez ·</h5>
    </div>
  );
}
