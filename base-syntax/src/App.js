import React, { Component } from 'react';
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

class App extends Component {

  state = {
    username: 'haha'
  }

  handleChange = (event) => {
    this.setState(
      {username : event.target.value}
    )
  }

  render(){
    return (
      <div>
        <UserInput changed={this.handleChange} username={this.state.username}/>
        <UserOutput username={this.state.username} />
      </div>
    )
  }
}

export default App;