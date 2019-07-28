
import { mlabAPI } from '../keys';
import parseHTML from './parseHTML';

const fetchFromDatabase = (updateTopics, setNotebooks) => {
    fetch(`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/notebooks?apiKey=${mlabAPI}`)
    .then(response => {
        return response.json()
    })
    .then(json => {
        // set the state.notebooks with all info from database
        // this will allow us to know when uploading if we should upload a new item or update an existing entry
        setNotebooks(json)
        // parse each html string and update topics
        for(let notebook of json){
            updateTopics(parseHTML(notebook.html))
        }
    })
}

export default fetchFromDatabase;