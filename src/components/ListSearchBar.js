import React, { Component } from "react";

class ListSearchBar extends Component {
  state = {
    name: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Name..."
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default ListSearchBar;
