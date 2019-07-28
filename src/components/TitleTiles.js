import React from 'react'

const TitleTiles = ({ topics, setUserSearch, setCurrentTopic }) => {
    
    const handleTileClick = (notebookID) => {
        return () => {
            setCurrentTopic(notebookID)
        }
    }

    const tiles = (topics) => {
        return topics.map((topic, i) => {
            return(
                <div key={i} className="tile" onClick={handleTileClick(topic.nbID)}>
                    {topic.title}
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