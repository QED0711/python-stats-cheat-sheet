import React, { Component } from 'react';
import './App.css';


import HTMLRenderer from './components/HTMLRenderer';
import SearchForm from './components/SearchForm';

import filterTopics from './js/filterTopics';
import FileDrop from './components/FileDrop';

import fetchFromDatabase from './js/fetchFromDatabase';

class App extends Component {
  constructor(){
    super()
    this.state = {
      notebooks: null,
      topics: [],
      userSearch: {
        type: "title",
        match: "",
        matchRule: "anywhere"
      }
    }
    this.setNotebooks = this.setNotebooks.bind(this);
    this.updateTopics = this.updateTopics.bind(this);
    this.setUserSearch = this.setUserSearch.bind(this);
  }

  componentDidMount = async () => {
    fetchFromDatabase(this.updateTopics, this.setNotebooks)
  }

  setNotebooks = (notebooks) => {
    this.setState({notebooks});
  }

  updateTopics = (topicsArr) => {
    let updatedTopics = this.state.topics
    updatedTopics.push(...topicsArr)
    this.setState({topics: updatedTopics})
  }

  setUserSearch = (searchParams) => {
    this.setState({userSearch: searchParams})
  }
  
  render = () => {
    // fetchFromDatabase(this.setNotebooks)
    const topicList = filterTopics(this.state)
    // console.log(this.state)

    return (
      <div className="App">
        {
          !!this.state.topics.length ?
          <div>
            <SearchForm setUserSearch={this.setUserSearch} searchParams={this.state.userSearch} />
            <FileDrop notebooks={this.state.notebooks} />
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
