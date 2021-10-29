import React from "react";
import ContactCard from "./ContactCard";

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
      <h2>Contact list : </h2>
      {contacts.length > 0 ? (
        contactListRender
      ) : (
        <h3 style={{ color: "red" }}>No contacts in list</h3>
      )}
    </div>
  );
};

export default ContactList;
