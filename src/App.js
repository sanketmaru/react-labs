import React, {Component} from 'react';
import './App.css';

export default class App extends Component {

  handleClick_mobile() {
    console.log("Mobile handle Click");
  }

  handleClick_desktop() {
    console.log("Desktop handle Click");
  }

  render() {
    return (
      <div>
        <table>
          <tr data-mobile onClick={this.handleClick_mobile.bind(this)}>
            <td>Mobile</td>
          </tr>
          <tr data-desktop onClick={this.handleClick_desktop.bind(this)}>
            <td>Desktop</td>
          </tr>
        </table>
      </div>
    );
  }
}
