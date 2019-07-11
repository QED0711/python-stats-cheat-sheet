
import { mlabAPI } from '../keys';

const fetchFromDatabase = () => {
    fetch(`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/notebooks?apiKey=${mlabAPI}`)
    .then(response => {
        return response.json()
    })
    .then(json => {
        console.log(json)
    })
}

export default fetchFromDatabase;