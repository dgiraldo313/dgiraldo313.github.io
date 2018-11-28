import React from 'react';
import Projects from '../Containers/Projects';
import '../sass/pages/work.scss'

// TODO use context API to pass down data to Projects component
const Work = ( props ) => {
    return (
        <div className="work-container">
            <div className="content">
                <div className="header">
                    <i className="fa fa-code" aria-hidden="true"></i>
                </div>
                <div className="body">
                    <div className="projects-container">
                        <h1>Personal Projects:</h1>
                        <Projects projects={ props.content.projects } key= "projects" />

                    </div>
                    <div className="freelance-container">
                        <h1>Freelance Work:</h1>
                        <Projects projects={ props.content.freelance } key= "freelance" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work;
