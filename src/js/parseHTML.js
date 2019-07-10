import extractTopicInfo from "./extractTopicInfo";

const parseHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    const cells = doc.getElementsByClassName("cell")
    // set our current string to the innerHTML of the first cell
    // This assumes that the first cell is an h1 header 
    let str = cells[0].innerHTML
    let segments = [] 
    // initialize cell variable for use in the loop
    let cell;
    for(var i = 1; i < cells.length; i++){ // we start on the first index because we have already accounted for the first cell above
        // set the current cell
        cell = cells[i]

        if(cell.getElementsByTagName("h1").length){ // if the cell contains an h1
            // add the whole str as the innerHTML of a JSX object 
            // domObjects.push(<div key={i} className="topic-card" dangerouslySetInnerHTML={{__html: str}}></div>)
            segments.push(str)
            // set the string equal to the new h1 header
            str = cell.innerHTML    
        } else {
            // add cell html to the str as long as it is not an h1 header
            str += cell.innerHTML
        }
    }
    // finally, add the last str to a new JSX object and push it to the domObjects.
    // domObjects.push(<div key={i} className="topic-card" dangerouslySetInnerHTML={{__html: str}}></div>)
    segments.push(str)
    let topics = []
    for(let str of segments){
        topics.push(extractTopicInfo(str));
    }
    return topics
}

export default parseHTML