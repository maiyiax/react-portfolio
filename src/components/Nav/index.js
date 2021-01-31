import React from 'react';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume']

    return (
        <ul className="flex-row">
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
    );
}

export default Nav;