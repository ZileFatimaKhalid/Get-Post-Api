import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      flag: 0,
    };
  }

  GET_API = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        // alert(response)
        this.setState({ isLoaded: true, items: response.data, flag: 1 });
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };

  POST_API = () => {
    console.log("Console Testing");
    var dict = {
      userId: document.getElementById("username").value,
      body: document.getElementById("password").value,
      title: document.getElementById("reg_id").value,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", dict)
      .then((response) => {
        console.log(response);
        this.setState({ isLoaded: true, flag: 2 });
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };
  check = () => {
    this.setState({ isLoaded: true, flag: 11 });
  };

  render() {
    const { error, isLoaded, items } = this.state;

    if (this.state.flag == 1) {
      return (
        <div>
          <button onClick={this.GET_API}>GET API CALL</button>

          <button onClick={this.check}>POST API CALL</button>

          <h1> GET API RESULTS AFTER BUTTON CLICK </h1>

          <ul>
            {items.map((item) => (
              <li key={item.name}>
                {item.id} {item.title}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (this.state.flag == 2) {
      return (
        <div>
          <button onClick={this.GET_API}>GET API CALL</button>

          <button onClick={this.check}>POST API CALL</button>
          <h1> Post Request has been Submitted</h1>
        </div>
      );
    } else if (this.state.flag == 11) {
      return (
        <div>
          <input id="username" type="text"></input>Username <br></br>
          <input id="password" type="text"></input>Password<br></br>
          <input id="reg_id" type="text"></input>Reg_id<br></br>
          <button onClick={this.POST_API}>Submit</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.GET_API}>GET API CALL</button>

          <button onClick={this.check}>POST API CALL</button>
        </div>
      );
    }
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        // alert(response)
        this.setState({ isLoaded: true, items: response.data });
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });

  }
}

export default App;