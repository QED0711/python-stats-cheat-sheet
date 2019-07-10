import React, { Component } from 'react';
import './App.css';


import HTMLRenderer from './components/HTMLRenderer';
import SearchForm from './components/SearchForm';

import parseHTML from './js/parseHTML';

class App extends Component {
  constructor(){
    super()
    this.state = {
      html: null,
      topics: [],
      userSearch: {
        type: "title",
        match: ""
      }
    }
    this.setHTML = this.setHTML.bind(this);
    this.setTopics = this.setTopics.bind(this);
    this.setUserSearch = this.setUserSearch.bind(this);
  }

  componentDidMount = async () => {
    fetch('https://raw.githubusercontent.com/QED0711/python-stats-cheat-sheet/master/src/MASTER.html', )
    .then((response) => {
      return response.text()
    }).then((text) => {
      // this.setHTML(text)
      const topics = parseHTML(text)
      this.setTopics(topics)
    })
  }

  setHTML = (html) => {
    this.setState({html})
  }

  setTopics = (topicsArr) => {
    console.log(topicsArr)
    this.setState({topics: topicsArr})
  }

  setUserSearch = ({ type, match }) => {
    console.log({type, match})
    this.setState({userSearch: {
      type,
      match
    }})
  }
  
  render = () => {
    
    if(this.state.html){
      parseHTML(this.state.html, this.setTopics)
    }

    return (
      <div className="App">
        <SearchForm setUserSearch={this.setUserSearch} />
        {
          !!this.state.topics.length 
          &&
          <HTMLRenderer topics={this.state.topics} />
        }
      </div>
    );
  }
}

export default App;
