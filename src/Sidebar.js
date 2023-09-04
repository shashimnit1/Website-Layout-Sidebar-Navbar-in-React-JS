import React from 'react'


const Sidebar = () => {
    return (
        <>
            <div className="container-fluid sidebarPanel">
                <div className="row flex-nowrap">
                    <div style={{border: "2pt solid red"}}className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" >
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100" >
                            <h5>Menu</h5>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start sidebar" id="menu" >
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                            </ul>
                            <hr/>
                             
                        </div>
                    </div>
                    {/* <div className="col py-3">
                        Content area...
                    </div> */}
                </div>
            </div>
        </>

    )
}

export default Sidebar
