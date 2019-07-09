import React from 'react'
// var parse = require('html-react-parser')

const parseHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    // doc.getElementsByClassName("inner_cell")[4].firstElementChild.nodeName
    const cells = [...doc.getElementsByClassName("cell")]
    // cells[0].getElementsByTagName("h1").length
    // above returns if the inner cell has a h1 tag as a child
    let results = [];
    let card = [];
    let firstCard = true;
    let str = ""
    for(var i = 0; i < cells.length; i++){
        const cell = cells[i]
        if(cell.getElementsByTagName("h1").length){
            results.push(<div key={i} className="topic-card" dangerouslySetInnerHTML={{__html: str}}></div>)
            str = ""      
        } else {
            str += cell.innerHTML
        }
    }
    results.push(<div key={i} className="topic-card" dangerouslySetInnerHTML={{__html: str}}></div>)
    return results
}

export default parseHTML