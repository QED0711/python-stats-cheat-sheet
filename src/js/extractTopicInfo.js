import React from 'react';

const getDomObject = (htmlString) => {
    return <div dangerouslySetInnerHTML={{__html: htmlString}}></div>
}

const getTopicTitle = (str) => {
    return str.getElementsByTagName('h1')[0].innerText
}

const getTopicTags = (str) => {
    return str.getElementsByTagName('h6')[0].innerText
}

const extractTopicInfo = (htmlString) => {
    const str = new DOMParser().parseFromString(htmlString, "text/html")
    
    const element = getDomObject(htmlString)
    const title = getTopicTitle(str)
    const tags = getTopicTags(str)

    return {element, title, tags}
}

export default extractTopicInfo;