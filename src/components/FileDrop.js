import React from 'react'

import { mlabAPI } from '../keys';
import parseHTML from '../js/parseHTML';

const FileDrop = () => {
    
    const readFile = (file) => {
        const reader = new FileReader()
        
        reader.onload = (e) => {
            const html = parseHTML(reader.result)
            // const json = JSON.stringify(reader.result)
            // console.log(html.rawString)
            window.$.ajax({
                url: `https://api.mlab.com/api/1/databases/jupyter-notecards/collections/notebooks?apiKey=${mlabAPI}`,
                data: JSON.stringify(html[0].rawString),
                type: "POST",
                contentType: "application/json"
            })
        } 
        
        reader.readAsText(file)        
    }

    return(
        <form>
            <input id="file" type="file" onChange={(e) => {
                e.preventDefault()
                readFile(e.target.files[0])
            }}/>
        </form>
    )
}

export default FileDrop;