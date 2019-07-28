import React from 'react'

const TitleTiles = ({ topics, setUserSearch, setCurrentTopic }) => {
    
    const handleTileClick = (title) => {
        return () => {
            setCurrentTopic(["Hello World"])
            // setUserSearch({type: "title", match: title, matchRule: "anywhere"})
        }
    }

    const tiles = (topics) => {
        const titles = topics.map(x => x.title.replace("¶", "")).sort()
        return titles.map((title, i) => {
            return(
                <div key={i} className="tile" onClick={handleTileClick(title)}>
                    {title}
                </div>
            ) 
        })
    }

    return(
        <div className="title-tiles">
            {tiles(topics)}
        </div>
    )

}

export default TitleTiles;