import React from 'react'

import { fetchContentFromDB } from '../js/fetchFromDatabase';

const TitleTiles = ({ topics, setDisplayTopic }) => {
    
    const handleTileClick = (notebookID, title) => {
        return () => {
            setDisplayTopic("loading")
            fetchContentFromDB(notebookID, title, setDisplayTopic)
        }
    }

    const tiles = (topics) => {
        return topics.map((topic, i) => {
            return(
                <div key={i} className="tile" onClick={handleTileClick(topic.nbID, topic.title)}>
                    {topic.title}
                </div>
            ) 
        })
    }

    return(
        <div className="title-tiles">
            {tiles(topics)}
            <hr/>
        </div>
    )

}

export default TitleTiles;