
const filterTopics = (state) => {
    let topicList;
    
    if(state.userSearch.match.length && state.topics.length){
    //   Setup regex match text (beginning or entire string search)
      let matchText;
      if(state.userSearch.matchRule === 'anywhere'){
        matchText = state.userSearch.match
      } else {
        matchText = "^" + state.userSearch.match
      }
    //   create regex
      const regex = new RegExp(matchText, 'gi')
    //   filter topics
    
      topicList = state.topics.filter(topic => {
        // debugger
        return !!topic[state.userSearch.type].match(regex)
      }) 
    } else {
      topicList = state.topics
    }
    
    return topicList
}

export default filterTopics;
