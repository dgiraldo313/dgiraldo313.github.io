import React from 'react';

// TODO move links to data set up to make it more scalable -- Adapt Context API to pass data down to this component
const Social = ( props ) => {
    return (
        <div id="social-icons">
            <a href="https://github.com/dgiraldo313" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/danielgiraldo313" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin linked-in" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/dgiraldo313" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter twitter" aria-hidden="true"></i>
            </a>
        </div>
    );
}

export default Social;
