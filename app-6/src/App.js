import React, { Component } from "react";
import "./App.css";
import ToDo from "./Components/ToDo"

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      input: ""
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleInputChange(input) {
    this.setState({ input: input})

  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <h1>To Do List</h1>
        <input value={this.state.input} 
        placeholder="Enter new task" 
        onChange={ (event) => this.handleInputChange(event.target.value)}/>
        <button onClick={ () => this.handleAddTask()}>ENTER</button>
        <div>{this.state.list.map(item => <ToDo task={item}/>) }</div>
      </div>
    );
  }
}

export default App;
