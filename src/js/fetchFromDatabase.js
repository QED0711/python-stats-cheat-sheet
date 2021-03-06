
import { mlabAPI, currentNotebookCollection, currentTopicsCollection } from '../keys';
// import parseHTML from './parseHTML'; DEPRECEATED

// Atlas Update
// mongodb+srv://<username>:<password>@jupyter-notecards.2il5q.mongodb.net/jupyter-notecards?retryWrites=true&w=majority

const BASE_URL = "https://qjawdb9hsf.execute-api.us-east-2.amazonaws.com/default"



const fetchContentFromDB = (notebookID, title, setDisplayTopic) => {
    
    // fetch(`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/${currentNotebookCollection}/${notebookID}?apiKey=${mlabAPI}`)
    fetch(`${BASE_URL}/notecard?id=${notebookID}`)
    .then(response => {
        return response.json()
    })
    .then(json => {
        // set the state.notebooks with all info from database
        // this will allow us to know when uploading if we should upload a new item or update an existing entry
        for(let topic of json.html){
            if(topic.title.replace("¶", "") === title){
                setDisplayTopic(topic)
                return
            }
        }
        // setNotebooks(json)
        // update topics in state with newly fetch data
        // const topics = json.map(notebook => {
        //     for(let nb of notebook.html){
        //         nb.notebookID = notebook._id.$o
        //     }
        //     return notebook.html
        // })
        // updateTopics(topics.flat())
    }).catch(err => {
        console.log(err)
    })
}

const fetchTopicsFromDB = (setTopics) => {
    // fetch(`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/${currentTopicsCollection}?apiKey=${mlabAPI}`)
    fetch(`${BASE_URL}/topics`)
    .then(response => {
        return response.json()
    })
    .then(json => {
        setTopics(json)
    })
}

export {
    fetchContentFromDB,
    fetchTopicsFromDB
};