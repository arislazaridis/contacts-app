import React from "react";
import user from "../images/user.jpg";
import { Link } from "react-router-dom";

function ContactCard({ contact, clickHandler }) {
  const { name, email, id } = contact;
  return (
    <div>
      <div key={id}>
        <img style={{ width: "30px" }} src={user} alt="user" />
        <Link to={`/contact/${id}`}>
          <strong> Name : </strong>
          {name} <strong>Email:</strong> {email}
        </Link>
        <button type="click" onClick={() => clickHandler(id)}>
          delete
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
