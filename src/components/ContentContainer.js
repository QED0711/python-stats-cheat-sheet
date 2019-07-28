import React from 'react'

import HTMLRenderer from './HTMLRenderer';
import TitleTiles from './TitleTiles';

const ContentContainer = ({ topics, activeSearch, setUserSearch, setCurrentTopic }) => {
    return (
        <div className="container">
            <TitleTiles topics={topics} setUserSearch={setUserSearch} setCurrentTopic={setCurrentTopic} />
            {
                // !!activeSearch 
                // &&
                // <HTMLRenderer topics={topics} />
            }
        </div>
    )

}

export default ContentContainer;