
import { mlabAPI, currentNotebookCollection, currentTopicsCollection } from '../keys';
// import parseHTML from './parseHTML'; DEPRECEATED

const fetchContentFromDB = (setNotebooks) => {
    fetch(`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/${currentNotebookCollection}?apiKey=${mlabAPI}`)
    .then(response => {
        return response.json()
    })
    .then(json => {
        // set the state.notebooks with all info from database
        // this will allow us to know when uploading if we should upload a new item or update an existing entry
        setNotebooks(json)
        // update topics in state with newly fetch data
        // const topics = json.map(notebook => {
        //     for(let nb of notebook.html){
        //         nb.notebookID = notebook._id.$oid
        //     }
        //     return notebook.html
        // })
        // updateTopics(topics.flat())
    })
}

const fetchTopicsFromDB = (setTopics) => {
    fetch(`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/${currentTopicsCollection}?apiKey=${mlabAPI}`)
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