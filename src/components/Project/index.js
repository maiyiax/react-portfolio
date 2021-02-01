import React, { useState } from 'react';

function Project() {
    const [projects] = useState([
        {
            name: 'Notetaker',
            description: 'Express.js app used to write and save notes.',
            link: 'https://morning-springs-52870.herokuapp.com/'
        },
        {
            name: 'Recipe API',
            description: 'App used to search for food and drink recipes.',
            link: 'https://jess-smith49.github.io/the-menu/'
        },
        {
            name: 'Run Buddy',
            description: 'Website that offers training services.',
            link: 'https://maiyiax.github.io/run-buddy/'
        },
        {
            name: 'Tech Blog',
            description: 'CMS style website for publishing blog posts.',
            link: 'salty-dusk-80859.herokuapp.com/'
        },
        {
            name: 'Plant App',
            description: 'Application to help find houseplants.',
            link: 'https://blooming-brook-59963.herokuapp.com/'
        },
    ]);

    return (
        <section>
            <h1>Projects</h1>
            <div className='card'>
                {projects.map((image, i) => {
                    <img
                        src={require(`../../assets/projects/${i}.jpg`).default}
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        key={image.name}
                    />
                })}
            </div>
        </section>
    )
}

export default Project;