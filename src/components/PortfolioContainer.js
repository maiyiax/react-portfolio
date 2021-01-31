import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';

const Portfolio = () => {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Portfolio':
                return <Project />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <Header>
            </Header>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage(currentPage)}</div>
        </div>
    );
}

export default Portfolio;