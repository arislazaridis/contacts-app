import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import uuid from "react-uuid";
import api from "./api/contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    // const retrieveContacts = JSON.parse(
    // localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (retrieveContacts) setContacts(retrieveContacts);
    //retrieve data from local storage
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); //store in local storage
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/add"
            // component={AddContact}
            render={() => <AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            exact
            render={() => (
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}

            // component = {()=><ContactList contacts={contacts} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
