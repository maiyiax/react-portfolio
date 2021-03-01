import React, { useState } from 'react';

function Project() {
    const [projectItems] = useState([
        {
            id: 0,
            name: "Notetaker",
            description: "Express.js app used to write and save notes.",
            deployed: "https://morning-springs-52870.herokuapp.com/",
            github: "https://github.com/maiyiax/note-taker",
            // location: "../../assets/projects/0.jpg"
        },
        {
            id: 1,
            name: "Recipe API",
            description: "App used to search for food and drink recipes.",
            deployed: "https://jess-smith49.github.io/the-menu/",
            github: "https://github.com/maiyiax/the-menu",
            // location: "../../assets/projects/1.jpg"
        },
        {
            id: 2,
            name: "Run Buddy",
            description: "Website that offers training services.",
            deployed: "https://maiyiax.github.io/run-buddy/",
            github:"https://github.com/maiyiax/run-buddy",
            // location: "../../assets/projects/2.jpg"
        },
        {
            id: 3,
            name: "Tech Blog",
            description: "CMS style website for publishing blog posts.",
            deployed: "salty-dusk-80859.herokuapp.com/",
            github: "https://github.com/maiyiax/mvc-tech-blog",
            // location: "../../assets/projects/3.jpg"
        },
        {
            id: 4,
            name: "Plant App",
            description: "Application to help find houseplants.",
            deployed: "https://blooming-brook-59963.herokuapp.com/",
            github: "https://github.com/maiyiax/project-2",
            // location: "../../assets/projects/4.jpg"
        },
        {
            id: 5,
            name: "Dev Learn",
            description: "App for building flashcards",
            deployed: "https://murmuring-scrubland-26245.herokuapp.com/",
            github: "https://github.com/jess-smith49/dev-tools",
            // location: "../../assets/projects/5.jpg"
        }
    ]);

    return (
        <section>
            <h1 className='title'>Projects</h1>
            {projectItems.map(projects => {
                return (
                <div className="container" key={projects.id}>
                    <img src={require(`../../assets/projects/${projects.id}.jpg`).default} alt={projects.name} className="project-image"></img>
                    <details>
                        <h3>{projects.name}</h3>
                        <p>{projects.description}</p>
                        <a href={projects.deployed} target="blank">Deployed Site</a>
                        <br></br>
                        <a href={projects.github} target="__blank"><i className="fab fa-github-square fa-2x"></i></a>
                    </details>
                </div>
                )
            })}
        </section>
    )
}

export default Project;