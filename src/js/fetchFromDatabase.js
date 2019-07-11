
import { mlabAPI } from '../keys';
import parseHTML from './parseHTML';

const fetchFromDatabase = (updateTopics, setNotebooks) => {
    fetch(`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/notebooks?apiKey=${mlabAPI}`)
    .then(response => {
        return response.json()
    })
    .then(json => {
        setNotebooks(json)
        for(let notebook of json){
            updateTopics(parseHTML(notebook.html))
        }
        // debugger
    })
}

export default fetchFromDatabase;