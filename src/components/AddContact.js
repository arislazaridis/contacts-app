import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    console.log(this.state);
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button>Add</button>
          <Link to="/">
            <button>Contact list</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddContact;
