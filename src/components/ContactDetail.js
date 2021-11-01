import React from "react";
import user from "../images/user.jpg";
import { Link } from "react-router-dom";

function ContactDetail(props) {
  console.log(props);
  return (
    <div>
      <img src={user} alt="user" />
    </div>
  );
}

export default ContactDetail;
