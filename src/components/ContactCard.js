import React from "react";
import user from "../images/user.jpg";

function ContactCard({ contact, clickHandler }) {
  const { name, email, id } = contact;
  return (
    <div>
      <div key={id}>
        <img style={{ width: "30px" }} src={user} alt="user" />
        <strong> Name : </strong>
        {name} <strong>Email:</strong> {email}
        <button type="click" onClick={() => clickHandler(id)}>
          delete
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
