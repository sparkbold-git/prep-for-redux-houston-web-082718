import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { count: 0 };

  updateCount = count => {
    this.setState({ count });
  };

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} />
        <Counter updateCount={this.updateCount} />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Flatiron</h1>
        <h3>The current count is less than {this.props.count + upToNext}</h3>;
      </header>
    );
  }
}

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.props.updateCount(this.state.count);
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
    this.props.updateCount(this.state.count);
  };

  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    // return `The current count is less than ${this.state.count + upToNext}`;
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
        {/* <h3>{this.renderDescription()}</h3> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
