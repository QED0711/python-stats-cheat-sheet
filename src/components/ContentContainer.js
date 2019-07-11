import React from 'react'

import HTMLRenderer from './HTMLRenderer';
import TitleTiles from './TitleTiles';

const ContentContainer = ({ topics, activeSearch, setUserSearch }) => {
    console.log(activeSearch)
    return(
        <div className="container">
            {
                activeSearch ?
                <HTMLRenderer topics={topics} />
                :
                <TitleTiles topics={topics} setUserSearch={setUserSearch} />
            }
        </div>
    )

}

export default ContentContainer;