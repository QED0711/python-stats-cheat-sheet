import React from 'react'

import { mlabAPI } from '../keys';
import parseHTML from '../js/parseHTML';

const FileDrop = () => {
    
    const readFile = (file) => {
        const reader = new FileReader()
        
        reader.onload = (e) => {
            // const html = parseHTML(reader.result)
            // const json = JSON.stringify(reader.result)
            // console.log(html.rawString)
            const fileInfo = file
            // debugger
            window.$.ajax({
                url: `https://api.mlab.com/api/1/databases/jupyter-notecards/collections/notebooks?apiKey=${mlabAPI}`,
                data: JSON.stringify({
                    _id: {$oid: "5d26fb535d0e65501b61dbe1"},
                    name: fileInfo.name,
                    modified: fileInfo.lastModified, 
                    html: reader.result
                }),
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