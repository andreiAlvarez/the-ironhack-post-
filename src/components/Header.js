import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Header() {
  let dateCreate = moment().format("ddd, MMMM DD, YYYY");

  return (
    <section className="header">
      <Link to="/" className="logo">
        <h1 className="newspaper-head">The Ironhack Post</h1>
      </Link>
      <p className="date">{dateCreate}</p>
    </section>
  );
}
