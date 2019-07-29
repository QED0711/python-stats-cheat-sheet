
import { mlabAPI, currentNotebookCollection, currentTopicsCollection } from '../keys';
import parseHTML from '../js/parseHTML'
import getTopicsFromHTML from '../js/getTopicsFromHTML';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10)

const readSaveFile = (file, notebooks, allTopics) => {
    const reader = new FileReader()

    reader.onload = async (e) => {
        // pull in data from outer scope
        const fileInfo = file
        const nbs = notebooks
        const tps = allTopics

        // check to make sure the submission is an html file
        if(fileInfo.type !== "text/html"){
            window.alert("This file type is not compatible. Please only submit HTML files.");
            window.location.reload()
            return
        }
        // set our base data object - this is what we will send to the database

        const data = { name: fileInfo.name, modified: fileInfo.lastModified, html: parseHTML(reader.result) }
        
        let overwrite = false;

        for (let tp of tps) {
            // if the file name already is in our database
            if (tp.notebookName === fileInfo.name) {
                const hash = tp.hash

                const accessCode = window.prompt("A file already exists with this name. Uploading this file will overwrite the previous version. \n\nIf you are the author of this file and would like to update it, enter the password you used when you originally uploaded the file and submit.")
                if (accessCode && accessCode !== "") {
                    var authorized = await bcrypt.compare(accessCode, hash)
                    overwrite = true
                }

                if (authorized) { // if user presents correct credentials, set the id and hash to update the data
                    data._id = tp._id
                    data.hash = hash
                    break
                } else {
                    window.alert("Sorry, you do not have access rights to update this file.")
                    window.location.reload()
                }
            }
        }
        
        // if we're not updating an existing entry, add password protection to the new entry
        if (!overwrite) {
            const accessCode = window.prompt("You are about to upload a new file. Please password protect it so you can update it at a later time")
            data.hash = bcrypt.hashSync(accessCode, salt)
            // Provide a unique ID based on time when saving a new tile
            data._id = new Date().getTime()
        }

        // get topics from submitted html
        const topics = getTopicsFromHTML(reader.result)

        // set a foreign key for the topics so they can reference the correct notebook
        // set the hash and notebookName in the topic to identify if a user has edit privileges
        const topicsObj = {
            _id: data._id,
            hash: data.hash,
            notebookName: fileInfo.name,
            topics: topics,
        }

        
        window.$.ajax({
            url:`https://api.mlab.com/api/1/databases/jupyter-notecards/collections/${currentTopicsCollection}?apiKey=${mlabAPI}`,
            data: JSON.stringify(topicsObj),
            type: "POST",
            contentType: "application/json",
            success: () => {
                // once topics have been saved, send the full data object
                window.$.ajax({
                    url: `https://api.mlab.com/api/1/databases/jupyter-notecards/collections/${currentNotebookCollection}?apiKey=${mlabAPI}`,
                    data: JSON.stringify(data),
                    type: "POST",
                    contentType: "application/json",
                    success: () => { window.location.reload() },
                })

            },
        })


    }

    reader.readAsText(file)
}

export default readSaveFile