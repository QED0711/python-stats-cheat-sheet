
import { mlabAPI, notebookCollection, developmentCollection } from '../keys';
// import parseHTML from './parseHTML'; DEPRECEATED

const fetchFromDatabase = (updateTopics, setNotebooks) => {
    fetch(`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/${developmentCollection}?apiKey=${mlabAPI}`)
    .then(response => {
        return response.json()
    })
    .then(json => {
        // set the state.notebooks with all info from database
        // this will allow us to know when uploading if we should upload a new item or update an existing entry
        setNotebooks(json)
        // update topics in state with newly fetch data
        const topics = json.map(notebook => {
            return notebook.html
        })
        updateTopics(topics.flat())
    })
}

export default fetchFromDatabase;