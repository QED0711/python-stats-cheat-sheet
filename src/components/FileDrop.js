import React from 'react'

import { mlabAPI } from '../keys';

import bcrypt from 'bcryptjs';
import { access } from 'fs';
const salt = bcrypt.genSaltSync(10)


const FileDrop = ({ notebooks }) => {

    const readFile = (file, notebooks) => {
        const reader = new FileReader()
        
        reader.onload = async (e) => {
            // pull in data from outer scope
            const fileInfo = file
            const nbs = notebooks

            // set our base data object - this is what we will send to the database
            const data = {name: fileInfo.name, modified: fileInfo.lastModified, html: reader.result}
            let overwrite = false;
            // const hash = bcrypt.hashSync("B4c0/\/", salt)
            for(let nb of nbs){
                // if the file name already is in our database
                if(nb.name === fileInfo.name){
                    const hash = nb.hash || "567"
                    
                    const accessCode = window.prompt("A file already exists with this name. Uploading this file will overwrite the previous version. \n\nIf you are the author of this file and would like to update it, enter the password you used when you originally uploaded the file and submit.")
                    
                    if(accessCode && accessCode !== ""){
                        var authorization = await bcrypt.compare(accessCode, hash)
                        overwrite = true
                    }

                    if(authorization){
                        data._id = {$oid: nb._id.$oid}
                        break
                    } else {
                        window.alert("Sorry, you do not have access rights to update this file.")
                        window.location.reload()
                    }
                }
            }
            // if we're not updating an existing entry, add password protection to the new entry
            if(!overwrite){
                const accessCode = window.prompt("You are about to upload a new file. Please password protect it so you can update it at a later time")
                data.hash = bcrypt.hashSync(accessCode, bcrypt.genSaltSync(10))
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