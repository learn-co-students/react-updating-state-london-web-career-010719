// Code ClickityClick Component Here
import React from "react";

export default class ClicketyClick extends React.Component {
  state = {
    hasBeenClicked: false
  };

  handleClick = () => {
    this.setState({ hasBeenClicked: true }, () =>
      console.log(this.state.hasBeenClicked)
    );
  };

  render() {
    return (
      <div>
        <p>
          I have {this.state.hasBeenClicked === false ? "not" : null} been
          clicked
        </p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}
