
const filterTopics = (state) => {
    let topicList = []
    
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
    
      state.topics.forEach(notebook => {
        for(let topic of notebook.topics ){
          if(topic[state.userSearch.type].match(regex)){
            topicList.push(topic.title)
          }
        }
      })

    } else {
      topicList = state.topics.map(notebook => {
        return notebook.topics.map(t => {
          return {title: t.title, nbID: notebook._id}
        })
      }).flat()
    }
    
    return topicList
}

export default filterTopics;
