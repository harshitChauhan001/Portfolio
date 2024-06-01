// Links.js
import React from 'react';
import './Links.css';

import github_icon_image from "../../assets/github_image.webp"
import LeftSideBar from '../LeftSidebar/LeftSideBar';

function Links() {
    // Function to handle link click
    const handleLinkClick = (url) => {
        window.open(url, '_blank'); // Open link in a new tab
    };

    // Function to render link items
    const renderLinkItem = (name, url, dateModified, type, size) => (
        <div className='link-item' onClick={() => handleLinkClick(url)}>
            <div className='link-icon'>
                <img src={github_icon_image} alt='Link Icon' />
            </div>
            <div className='link-name'>{name}</div>
            <div className='link-date-modified'>{dateModified}</div>
            <div className='link-type'>{type}</div>
            <div className='link-size'>{size}</div>
        </div>
    );

    return (
        <div className='tab-inside'>
            <LeftSideBar />
            <div className='links-container'>
                <div className='links-header'>
                    <div>Name</div>
                    <div>Date modified</div>
                    <div>Type</div>
                    <div>Size</div>
                </div>
                <div className='links-list'>
                    {renderLinkItem('Github', 'https://github.com/harshitChauhan001', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Leetcode', 'https://leetcode.com/u/h_rajput/', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Linkedin', 'https://github.com/harshitChauhan001', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Chess with Friends', 'https://github.com/harshitChauhan001/Chess', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Redis_Chess_server', 'https://github.com/harshitChauhan001/Chess-Redis-server', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Portfolio', 'https://www.google.com', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Ticket Tango', 'https://github.com/harshitChauhan001/TicketTango-client', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Ticket Tango server', 'https://github.com/harshitChauhan001/TicketTango-server', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Stack Overflow Clone', 'https://github.com/harshitChauhan001/stackoverflow-client', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Stack Overflow Server', 'https://github.com/harshitChauhan001/stackoverflow-server', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Chess Live', 'https://chess-blue-seven.vercel.app/', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Ticket Tango Live', 'https://ticket-tango-client.vercel.app/', '30/12/2021 03:32', 'Shortcut', '2kb')}
                    {renderLinkItem('Stack Overflow Live', 'https://stackoverflow-client-bay.vercel.app/', '30/12/2021 03:32', 'Shortcut', '2kb')}


                </div>
            </div>
        </div>
    );
}

export default Links;
