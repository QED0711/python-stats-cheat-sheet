
import { mlabAPI } from '../keys';

const fetchFromDatabase = () => {
    `https://api.mlab.com/api/1/databases/jupyter-notecards/collections/notebooks?apiKey=${mlabAPI}`
}

export default fetchFromDatabase;