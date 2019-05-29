import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    // fetch(`${SEARCH}?q=preact`)
    //   .then(r => r.json())
    //   .then(json => {
    //     this.setState({
    //       results: (json && json.items) || []
    //     });
    //   });
  }

  test_mobile() {
    console.log("test method for strip");
  }

  handleClick_mobile() {
    console.log(
      "Mobile handle Click, this callback should not be present in desktop build"
    );
  }

  handleClick_desktop() {
    console.log("Desktop handle Click");
  }

  render(props, { results = [] }) {
    return (
      <div>
        <h1>Example</h1>
        <div class="list">
          {/* {results.map(result => <Result result={result} />)} */}
        </div>
        <table>
          <tr data-mobile onClick={this.handleClick_mobile.bind(this)}>
            <td>Bucky</td>
          </tr>
          <tr data-mobile>
            <td>Black Panther</td>
          </tr>
          <tr onClick={this.handleClick_desktop.bind(this)}>
            <td>Hulk</td>
          </tr>
          <tr>
            <td>Thor</td>
          </tr>
        </table>
      </div>
    );
  }
}
