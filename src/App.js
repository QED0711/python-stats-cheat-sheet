import React, { Component } from 'react';
import './App.css';
import ReportDispatcher from 'jest-jasmine2/build/jasmine/ReportDispatcher';
import HTMLRenderer from './components/HTMLRenderer';


class App extends Component {
  constructor(){
    super()
    this.state = {
      html: null,
      topics: []
    }
    this.setHTML = this.setHTML.bind(this);
    this.setTopics = this.setTopics.bind(this);
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

  setTopics = (topicsArr) => {
    this.setState({topics: topicsArr})
  }
  
  render = () => {
    return (
      <div className="App">
        {
          this.state.html 
          &&
          <HTMLRenderer html={this.state.html} topics={this.state.topics} />
        }
      </div>
    );
  }
}

export default App;
