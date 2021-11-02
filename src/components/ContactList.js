import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import ContactDetail from "./ContactDetail";

const ContactList = ({ contacts, getContactId }) => {
  //   const { id, email, name } = contacts;

  const deleteContactHandler = (id) => {
    getContactId(id);
  };
  const contactListRender = contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} />
    );
  });

  return (
    <div>
      <h2>
        Contact list
        <Link to="/add">
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              marginLeft: "50px",
            }}
          >
            Add Contact
          </button>
        </Link>
      </h2>

      {contacts.length > 0 ? (
        contactListRender
      ) : (
        <h3 style={{ color: "red" }}>No contacts in list</h3>
      )}
    </div>
  );
};

export default ContactList;
