import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Portfolio() {
    const dispatch = useDispatch();
    const projectsStore = useSelector(state => state.projects);
    const projects = projectsStore.projects;
    const ignoredProjects = projectsStore.ignoredProjects;

    useEffect(() => {
        let apiURL = 'https://api.github.com/users/dsamuelson/repos'

        fetch(apiURL).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    dispatch({
                        type: "SET_PORTFOLIO_PROJECTS",
                        projects: [...data]
                    });
                })
            }
        })
    },[]);

    function filterProjects() {
        return projects.filter(
            (project) => project.visibility === "public" && !ignoredProjects.includes(project.id) 
        );
    }

    return (
        <div className="projects-cont">
            <h2>My Public Projects</h2>
            <ul>
                {projects.length ? (
                    filterProjects().map((project) => (
                        <li
                        key={project.id}
                        className='project-item-card'
                        >
                            <a href={`${project.html_url}`} target="_blank"b  n>
                            <h2 className="project-title">{project.name}</h2>
                            <img src={require('../../assets/images/profile-pic.jpg')} className='project-image'/>
                            <p className="project-topics">{project.topics}</p>
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