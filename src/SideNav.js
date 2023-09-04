import React from 'react'
import {NavLink} from "react-router-dom";
const SideNav = () => {
    return (
        <>
            <div className='SideNavbar'>
                <h5>Menu</h5>

                <ul>
                    <li className='ListStyle'>
                        <NavLink exact activeClassName="active" to="/" >
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </NavLink>
                    </li>
                    <li className='ListStyle'>
                        <NavLink exact activeClassName="active" to="/page_1" >
                            <i class="bi bi-1-square"></i><span className="ms-1 d-none d-sm-inline">Page-1</span>
                        </NavLink>
                    </li>
                    <li className='ListStyle'>
                        <NavLink exact activeClassName="active" to="/page_2" >
                        <i class="bi bi-2-square"></i><span className="ms-1 d-none d-sm-inline">Page-2</span>
                        </NavLink>
                    </li> <li className='ListStyle'>
                        <NavLink exact activeClassName="active" to="/page_3" >
                        <i class="bi bi-3-square"></i><span className="ms-1 d-none d-sm-inline">Page-3</span>
                        </NavLink>
                    </li> 
                    <li className='ListStyle'>
                        <NavLink exact activeClassName="active" to="/page_4" >
                        <i class="bi bi-4-square"></i><span className="ms-1 d-none d-sm-inline">Page-4</span>
                        </NavLink>
                   </li>
                </ul>
            </div>

        </>
    )
}

export default SideNav;