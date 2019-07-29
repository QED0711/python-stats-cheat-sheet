

const getTagsSibling = (e) => {

    if(e.nextElementSibling.tagName == "H3"){
        return e.nextElementSibling.innerText.replace("¶", "")
    }
    return getTagsSibling(e.nextElementSibling)
    
}

const getTopicsFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    const topics = [...doc.getElementsByTagName("h1")].map(topic => {
        const title = topic.innerText.replace("¶", "")
        const tags = getTagsSibling(topic)
        return {
            title,
            tags
        }
    })
    return topics
}

export default getTopicsFromHTML;