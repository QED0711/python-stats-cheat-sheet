import React, { Component } from 'react';
import './App.css';


import HTMLRenderer from './components/HTMLRenderer';
import SearchForm from './components/SearchForm';

import parseHTML from './js/parseHTML';
import filterTopics from './js/filterTopics';

class App extends Component {
  constructor(){
    super()
    this.state = {
      html: null,
      topics: [],
      userSearch: {
        type: "title",
        match: "",
        matchRule: "anywhere"
      }
    }
    this.setHTML = this.setHTML.bind(this);
    this.setTopics = this.setTopics.bind(this);
    this.setUserSearch = this.setUserSearch.bind(this);
  }

  componentDidMount = () => {
    fetch('https://raw.githubusercontent.com/QED0711/python-stats-cheat-sheet/master/MASTER.html', )
    .then((response) => {
      return response.text()
    }).then((text) => {
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

  setUserSearch = (searchParams) => {
    this.setState({userSearch: searchParams})
  }
  
  render = () => {

    const topicList = filterTopics(this.state)

    return (
      <div className="App">
        <SearchForm setUserSearch={this.setUserSearch} searchParams={this.state.userSearch} />
        {
          !!this.state.topics.length 
          &&
          <HTMLRenderer topics={topicList} />
        }
      </div>
    );
  }
}

export default App;
