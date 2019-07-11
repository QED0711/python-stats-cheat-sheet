import React from 'react'

const FileDrop = () => {
    
    const readFile = (file) => {
        const reader = new FileReader()
        
        reader.onload = (e) => {
            console.log(reader.result)
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