import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Project from '../Project';
import Resume from '../Resume';
import Footer from '../Footer';

function Header() {
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
            <header>
                <h1>Mai Yia Xiong</h1>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <div>{renderPage(currentPage)}</div>
            <Footer></Footer>
        </div>
    )
}

export default Header;