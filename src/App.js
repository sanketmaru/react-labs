import React, {Component} from 'react';
import './App.css';

export default class App extends Component {

  test_mobile() {
    console.log("Bucky");
  }

  handleClick_mobile() {
    console.log(
      "Black Panther"
    );
  }

  handleClick_desktop() {
    console.log("Desktop handle Click");
  }

  render() {
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
