import React from 'react';

const HTMLRenderer = ({ html }) => {
    // const doc = new DOMParser().parseFromString("<body>" + html.split("<body>")[1].split("</html>")[0], "text/html")
    
    const parseHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        const headers = [...doc.getElementsByTagName("h1")]
        let results = []
        for(let h of headers){
            results.push(h.innerText)
        }
        return results
    }

    // debugger

    return(
        <div className="main">
            {parseHtml(html)}
        </div>
    )
}

export default HTMLRenderer;