import React from 'react';

const getDomObject = (htmlString) => {
    return <div dangerouslySetInnerHTML={{__html: htmlString}}></div>
}

const getTopicTitle = (str) => {
    const element = str.getElementsByTagName('h1')
    if(element.length){
        return element[0].innerText
    } else {
        return ""
    }
}

const getTopicAuthor = (str) => {
    const element = str.getElementsByTagName('h2')
    if(element.length){
        return element[0].innerText
    } else {
        return ""
    }
}

const getTopicTags = (str) => {
    const element = str.getElementsByTagName('h3')
    if(element.length){
        return element[0].innerText
    } else {
        return ""
    }
}


const extractTopicInfo = (htmlString) => {
    const str = new DOMParser().parseFromString(htmlString, "text/html")
    
    const rawString = htmlString
    const element = getDomObject(htmlString)
    const title = getTopicTitle(str)
    const author = getTopicAuthor(str)
    const tags = getTopicTags(str)

    return {rawString, element, title, author, tags}
}

export default extractTopicInfo;