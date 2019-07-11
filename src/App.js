import React, { Component } from 'react';
import './App.css';


import HTMLRenderer from './components/HTMLRenderer';
import SearchForm from './components/SearchForm';

import parseHTML from './js/parseHTML';
import filterTopics from './js/filterTopics';
import FileDrop from './components/FileDrop';

import { mlabAPI } from './keys';
import fetchFromDatabase from './js/fetchFromDatabase';

class App extends Component {
  constructor(){
    super()
    this.state = {
      entry: "https://raw.githubusercontent.com/QED0711/python-stats-cheat-sheet/master/REFS.txt",
      references: [],
      topics: [],
      userSearch: {
        type: "title",
        match: "",
        matchRule: "anywhere"
      }
    }
    this.setReferences = this.setReferences.bind(this);
    this.updateTopics = this.updateTopics.bind(this);
    this.setUserSearch = this.setUserSearch.bind(this);
  }

  componentDidMount = () => {
    fetch(this.state.entry)
    .then(response => {
      return response.text()
    })
    .then(text => {

      const refs = text.split('\n').filter(str => !!str.length)
      
      for(let ref of refs){
      
        fetch(ref)
        .then((response) => {
          return response.text()
        })
        .then((text) => {
          const topics = parseHTML(text)
          this.updateTopics(topics)
        })
      }
      
    })
  }


  setReferences = (references) => {
    this.setState({references})
  }

  updateTopics = (topicsArr) => {
    console.log(topicsArr)
    
    let updatedTopics = this.state.topics
    updatedTopics.push(...topicsArr)
    this.setState({topics: updatedTopics})
  }

  setUserSearch = (searchParams) => {
    this.setState({userSearch: searchParams})
  }
  
  render = () => {
    fetchFromDatabase()
    const topicList = filterTopics(this.state)
    console.log(topicList)

    return (
      <div className="App">
        {
          !!this.state.topics.length ?
          <div>
            <SearchForm setUserSearch={this.setUserSearch} searchParams={this.state.userSearch} />
            <FileDrop />
            <HTMLRenderer topics={topicList} />
          </div>
          :
          <h1>LOADING...</h1>
        }
      </div>
    );
  }
}

export default App;
