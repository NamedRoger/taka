import React, { useEffect } from 'react';
import M from 'materialize-css';

const Sidebar = () => {
    useEffect(() => {
        M.Sidenav.init(this);
    });
    return (
        <div className="">
            <ul id="slide-out" className="side-nav fixed">
                <li><a href="#!">First Sidebar Link</a></li>
                <li><a href="#!">Second Sidebar Link</a></li>
            </ul>
        </div>

    );
}

export default Sidebar;