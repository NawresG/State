import  React  from 'react'

import './App.css';
import Counter from './component/Counter';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      Shows:false,
    };
  }
  Showing = () => {
    this.setState({ Shows: !this.state.Shows });
  };

  render() {
    return (
      <div>
        <div className="ManageDiv">
          <h2 className="textDec">Profile</h2>
          <button className="btn" onClick={(el) => this.Showing()}>
            {this.state.Shows ? "Show":"Hide" }
          </button>
        </div>

        {this.state.Shows ? (
          <div className="mainDiv">
            <Counter showState={this.state.Shows} />
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;

