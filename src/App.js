// 4
//import react and axios
//axios helps with APIs
import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
// 7a state is a global variable
  state = { advice: '',}

  // 5 componentMount is like Java main
  componentDidMount() {
    this.fetchApi();
  }

  // 6 fetch API is asynchronous
  fetchApi = async () => {
    // 6b set an id to a random number
    const id = Math.floor(Math.random() * 100) - 1;
    try {
        //6a retrieve info from api, pluggin in random number
      const response = await axios.get(
        `https://api.adviceslip.com/advice/${id}`
      );
      //the API was missing an end }
      const data = JSON.parse(response.data + "}");
      // 7 set the state variable
      const { advice } = data.slip;
      this.setState({ advice });
    } catch (error) {
      console.log("id", id);
      console.log(error);
    }
  };

  // 8 this is what goes into the render. classNames set up for css
  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick = {this.fetchApi}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;