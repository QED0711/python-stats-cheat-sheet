import React from 'react';

import parseHTML from '../js/parseHTML';

const HTMLRenderer = ({ html }) => {

    return(
        <div className="main">
            {parseHTML(html)}
        </div>
    )
}

export default HTMLRenderer;