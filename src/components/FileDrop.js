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

            // set our base data object - this is what we will send to the database
            const data = {name: fileInfo.name, modified: fileInfo.lastModified, html: reader.result}

            for(let nb of nbs){
                if(nb.name === fileInfo.name){
                    data._id = {$oid: nb._id.$oid}
                    break
                }
            }

            window.$.ajax({
                url: `https://api.mlab.com/api/1/databases/jupyter-notecards/collections/notebooks?apiKey=${mlabAPI}`,
                data: JSON.stringify(data),
                type: "POST",
                contentType: "application/json",
                success: () => {window.location.reload()},
            })
        } 
        
        reader.readAsText(file)        
    }

    const handleFile = (e) => {
        e.preventDefault()
        readFile(e.target.files[0], notebooks)
    }

    return(
        <form className="file-drop">
            <h3>Want to contribute?</h3>
            <p>Users are welcome and encouraged to contribute their own notes so we can expand upon this knowledge base. </p>
            <p>For information on how to format and save your jupyter notebooks, read the <a href="#">docs</a> for this project.</p>
            <hr/>
            <p>When ready to submit, select and upload your html file by clicking the button below.</p>
            <input id="file" type="file" onChange={handleFile}/>
        </form>
    )
}

export default FileDrop;