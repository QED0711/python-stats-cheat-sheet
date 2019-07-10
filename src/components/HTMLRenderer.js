import React from 'react';

import parseHTML from '../js/parseHTML';

const HTMLRenderer = ({ topics }) => {

    const renderTopics = (topics) => {
        return topics.map((topic, i) => {
            return <div key={i} className="topic-card">{topic.element}</div>
        })
    }

    return(
        <div className="content">
            
            {
                !!topics.length ? 
                renderTopics(topics)
                :
                <h1>Sorry, no matches for this search</h1>
            }
        </div>
    )
}

export default HTMLRenderer;