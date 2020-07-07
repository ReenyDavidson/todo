import React, { Component } from "react";
import ListSearchBar from "./ListSearchBar";
import ListDisplay from "./ListDisplay";

export class App extends Component {
  state = { Lists: [] };
  addToList = (name) => {
    name.id = Math.random();
    const Lists = [name, ...this.state.Lists];
    this.setState({ Lists: Lists });
  };

  DeleteItem = (id) => {
    let Lists = this.state.Lists.filter((List) => {
      return List.id !== id;
    });
    this.setState({
      Lists: Lists,
    });
  };

  render() {
    return (
      <div>
        <ListSearchBar onSubmit={this.addToList} />
        <ListDisplay deleteItem={this.DeleteItem} Lists={this.state.Lists} />
      </div>
    );
  }
}

export default App;
