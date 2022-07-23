import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries'

function Portfolio() {
    const dispatch = useDispatch();
    const projectsStore = useSelector(state => state.projects);
    const projects = projectsStore.projects;
    const { loading, data } = useQuery(QUERY_PROJECTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: 'SET_PORTFOLIO_PROJECTS',
                projects: [...data.projects]
            })
        }
    },[data, loading, dispatch]);

    return (
        <div className="projects-cont">
            <h2 className="page-title">My Public Projects</h2>
            <ul>
                {projects.length ? (
                    projects.map((project) => (
                        <li
                        key={project._id}
                        className='project-item-card'
                        >
                            <a href={`${project.htmlUrl}`} target="_blank" className="git-title" title="Go to Github Repo">
                                <span className="git-span">
                                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </span>
                                <h2 className="project-title">{project.name}</h2>
                            </a>
                            <a href={project.deployedUrl ? (`${project.deployedUrl}`) : (`href=${project.htmlUrl}`)} target="_blank">
                            <img src={project.image} alt="" className='project-image' title="Go to Website"/>
                            <p className="project-topics">{project.topics[0]}, {project.topics[1]}, {project.topics[2]}</p>
                            </a>
                        </li>
                    ))
                ): (
                    <h3>Hmmm... Why aren't my projects showing?</h3>
                )}
            </ul>

        </div>
    )
}

export default Portfolio;