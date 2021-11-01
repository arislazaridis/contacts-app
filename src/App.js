import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import uuid from "react-uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  //array with contacts
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Aris",
  //     email: "arislazaridis@yahoo.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Viki",
  //     email: "vikipapas@gmail.com",
  //   },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
    //retrieve data from local storage
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); //store in local storage
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

          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
