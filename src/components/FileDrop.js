import React from 'react'

import { mlabAPI } from '../keys';
// import parseHTML from '../js/parseHTML';

const FileDrop = ({ notebooks }) => {
    
    const readFile = (file, notebooks) => {
        const reader = new FileReader()
        
        reader.onload = (e) => {
            // pull in data from outer scope
            const fileInfo = file
            const nbs = notebooks

            const data = {name: fileInfo.name, modified: fileInfo.lastModified, html: reader.result}

            for(let nb of nbs){
                if(nb.name === fileInfo.name){
                    data._id = {$oid: nb._id.$oid}
                    break
                }
            }

            // debugger
            window.$.ajax({
                url: `https://api.mlab.com/api/1/databases/jupyter-notecards/collections/notebooks?apiKey=${mlabAPI}`,
                data: JSON.stringify(data),
                type: "POST",
                contentType: "application/json"
            })
        } 
        
        reader.readAsText(file)        
    }

    const handleFile = (e) => {
        e.preventDefault()
        readFile(e.target.files[0], notebooks)
    }

    return(
        <form>
            <input id="file" type="file" onChange={handleFile}/>
        </form>
    )
}

export default FileDrop;