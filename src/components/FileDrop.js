import React from 'react'

import readSaveFile from '../js/readSaveFile';


const FileDrop = ({ notebooks, topics }) => {


    const handleFile = (e) => {
        e.preventDefault()
        readSaveFile(e.target.files[0], notebooks, topics)
    }

    return (
        <form className="file-drop">
            <h3>Want to contribute?</h3>
            <p>Users are welcome and encouraged to contribute their own notes so we can expand upon this knowledge base. </p>
            <p>For information on how to format and save your jupyter notebooks, read the <a href="https://github.com/QED0711/python-stats-cheat-sheet/blob/master/README.md" target="_blank">docs</a> for this project.</p>
            <hr />
            <p>When ready to submit, select and upload your html file by clicking the button below.</p>
            <input id="file" type="file" onChange={handleFile} />
        </form>
    )
}

export default FileDrop;