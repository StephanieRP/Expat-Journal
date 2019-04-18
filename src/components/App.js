import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// Components
import LoginPage from "./LoginPage";
import Posts from "./Posts";
import Post from "./Post";
import PostForm from "./PostForm";
import UpdateForm from "./UpdateForm";
import Register from "./Register";
import Users from "./Users";
import PrivateRoute from "./PrivateRoute"; // redirecting to login for now

// Styles
import "../styles/App.css";
//Decrypt username
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");

class App extends Component {
  // Clears localstorage and logs out user
  logOutHandler = () => {
    localStorage.clear();
    alert("Thanks for visiting! Come back soon!");
  };
  render() {
    // Decrypt username to check which navbar to render
    const length = localStorage.length;
    let user = null;
    for (let i = 0; i < length; i++) {
      const key = localStorage.key(i);
      const decryptKey = cryptr.decrypt(key);
      if (decryptKey === "user") {
        const encryptedUser = localStorage.getItem(key);
        user = cryptr.decrypt(encryptedUser);
      }
    }

    return (
      <div className="App">
        {user ? (
          <nav>
            <Link to="/login" onClick={this.logOutHandler}>
              Log Out
            </Link>
            <Link to="/posts">Posts</Link>
            <Link to="/post-form">Post Your Story</Link>
            <p>Welcome {user}</p>
          </nav>
        ) : (
          <nav>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <h2>Please log in or Register to gain access</h2>
          </nav>
        )}
        <Route path="/login" component={LoginPage} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute path="/posts/:id" component={Post} />
        <PrivateRoute path="/post-form" component={PostForm} />
        <PrivateRoute exact path="/user/:id" component={Users} />
        <PrivateRoute path="/update-form" component={UpdateForm} />
      </div>
    );
  }
}

export default App;
