import React from 'react';
import './style.css';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume']

    return (
        <nav>
            <ul>
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;