import React from 'react';

import parseHTML from '../js/parseHTML';

const HTMLRenderer = ({ topics }) => {

    const renderTopics = (topics) => {
        return topics.map((topic, i) => {
            return <div key={i} className="topic-card">{topic.element}</div>
        })
    }

    return(
        <div className="main">
            {renderTopics(topics)}
        </div>
    )
}

export default HTMLRenderer;