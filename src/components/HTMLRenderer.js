import React from 'react';

const HTMLRenderer = ({ topics }) => {
    const renderTopics = (topics) => {
        return topics.map((topic, i) => {
            return <div key={i} className="topic-card" dangerouslySetInnerHTML={{__html: topic.rawString}}></div>

        })
    }

    return(
        <div className="cards">
            
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