import React, { Component } from 'react';
import './App.css';
import ReportDispatcher from 'jest-jasmine2/build/jasmine/ReportDispatcher';
import HTMLRenderer from './components/HTMLRenderer';


class App extends Component {
  constructor(){
    super()
    this.state = {
      html: null
    }
    this.setHTML = this.setHTML.bind(this);
  }

  componentDidMount = async () => {
    fetch('https://raw.githubusercontent.com/QED0711/python-stats-cheat-sheet/master/src/MASTER.html', )
    .then((response) => {
      return response.text()
    }).then((text) => {
      this.setHTML(text)
    })
  }

  setHTML = (html) => {
    this.setState({html})
  }
  
  render = () => {
    return (
      <div className="App">
        {
          this.state.html 
          &&
          <HTMLRenderer html={this.state.html} />
        }
      </div>
    );
  }
}

export default App;
