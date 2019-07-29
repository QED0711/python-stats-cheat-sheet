import React from 'react'

import HTMLRenderer from './HTMLRenderer';
import TitleTiles from './TitleTiles';

const ContentContainer = ({ topics, setUserSearch, setDisplayTopic, state }) => {
    return (
        <div className="container">
            <TitleTiles topics={topics} setUserSearch={setUserSearch} setDisplayTopic={setDisplayTopic} />
            {
                state.displayTopic 
                &&
                <HTMLRenderer displayTopic={state.displayTopic} />
            }
        </div>
    )

}

export default ContentContainer;