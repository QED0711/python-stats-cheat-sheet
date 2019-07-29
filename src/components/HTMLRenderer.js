import React from 'react';

const HTMLRenderer = ({ displayTopic }) => {

    return(
        <div>
            {
                displayTopic === 'loading' ?
                <h1>Loading...</h1>
                :
                <div className="cards">
                    <div className="topic-card" dangerouslySetInnerHTML={{__html: displayTopic.rawString}}></div>
                </div>
            }

        </div>
    )
}

export default HTMLRenderer;