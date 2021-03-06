import React, { Component } from 'react';
import './App.css';

import SearchForm from './components/SearchForm';

import filterTopics from './js/filterTopics';
import FileDrop from './components/FileDrop';

import { fetchContentFromDB, fetchTopicsFromDB } from './js/fetchFromDatabase';
import ContentContainer from './components/ContentContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      notebooks: null,
      topics: [],
      displayTopic: null,
      userSearch: {
        type: "title",
        match: "",
        matchRule: "anywhere"
      },
      currentTopic: null
    }
    this.setNotebooks = this.setNotebooks.bind(this);
    // this.updateTopics = this.updateTopics.bind(this);
    this.setTopics = this.setTopics.bind(this);
    this.setUserSearch = this.setUserSearch.bind(this);
    this.setCurrentTopic = this.setCurrentTopic.bind(this);
    this.setDisplayTopic = this.setDisplayTopic.bind(this);
  }

  componentDidMount = async () => {
    fetchTopicsFromDB(this.setTopics)
    // fetchContentFromDB(this.setNotebooks)
  }

  setNotebooks = (notebooks) => {
    this.setState({ notebooks });
  }

  setTopics = (topics) => {
    this.setState({ topics })
  }

  setDisplayTopic = (displayTopic) => {
    this.setState({ displayTopic })
  }

  updateTopics = (topics) => {
    // let updatedTopics = this.state.topics
    // updatedTopics.push(...topicsArr)
    this.setState({ topics })
  }

  setUserSearch = (searchParams) => {
    this.setState({ userSearch: searchParams })
  }

  setCurrentTopic = (topic) => {
    console.log(topic)
    this.setState({ currentTopic: topic })
  }

  render = () => {
    const topicList = filterTopics(this.state)
    const activeSearch = this.state.userSearch.match !== ""

    return (
      <div className="App">
        <h1>Jupyter Notecards</h1>
        <h4><em>A fast and simple way for you and your friends to combine and organize your jupyter notebooks.</em></h4>
        <FileDrop notebooks={this.state.notebooks} topics={this.state.topics} />
        {
          !!this.state.topics.length ?
            <div>
              <SearchForm setUserSearch={this.setUserSearch} searchParams={this.state.userSearch} setDisplayTopic={this.setDisplayTopic} />
              <ContentContainer
                topics={topicList}
                activeSearch={activeSearch}
                setUserSearch={this.setUserSearch}
                setDisplayTopic={this.setDisplayTopic}
                state={this.state}
              />
            </div>
            :
            <h1>LOADING...</h1>
        }
      </div>
    );
  }
}

export default App;
