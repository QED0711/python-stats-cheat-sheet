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
        <h1>Jupyter Notecards</h1>
        <h4><em>A fast and simple way for you and your friends to combine and organize your jupyter notebooks.</em></h4>
        <FileDrop notebooks={this.state.notebooks} />
        {
          !!this.state.topics.length ?
          <div>
            <SearchForm setUserSearch={this.setUserSearch} searchParams={this.state.userSearch} />
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
