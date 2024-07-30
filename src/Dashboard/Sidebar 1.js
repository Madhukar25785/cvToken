// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/collapse';
// import '../Css/css.css';
// import { Navigate, useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const logOut = () => {
//         localStorage.clear();
//         navigate('/');
//     }



//     return (

//         <div class="container-fluid p-0" className={`sidebar-container ${sidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>

//             <div class="row" id="body-row">

//                 <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">

//                     <ul class="list-group">

//                         <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
//                             <small>MAIN MENU</small>
//                         </li>

//                         <a href="#submenu1" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
//                             <div class="d-flex w-100 justify-content-start align-items-center">
//                                 <span class="fa fa-dashboard fa-fw mr-3"></span>
//                                 <span class="menu-collapsed">Dashboard</span>
//                                 <span class="submenu-icon ml-auto"></span>
//                             </div>
//                         </a>

//                         <div id='submenu1' class="collapse sidebar-submenu">
//                             <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
//                                 <span class="menu-collapsed">Charts</span>
//                             </a>
//                             <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
//                                 <span class="menu-collapsed">Reports</span>
//                             </a>
//                             <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
//                                 <span class="menu-collapsed">Tables</span>
//                             </a>
//                         </div>
//                         <a href="#submenu2" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
//                             <div class="d-flex w-100 justify-content-start align-items-center">
//                                 <span class="fa fa-user fa-fw mr-3"></span>
//                                 <span class="menu-collapsed">Profile</span>
//                                 <span class="submenu-icon ml-auto"></span>
//                             </div>
//                         </a>

//                         <div id='submenu2' class="collapse sidebar-submenu">
//                             <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
//                                 <span class="menu-collapsed">Settings</span>
//                             </a>
//                             <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
//                                 <span class="menu-collapsed">Password</span>
//                             </a>
//                         </div>
//                         <a href="#" class="bg-dark list-group-item list-group-item-action">
//                             <div class="d-flex w-100 justify-content-start align-items-center">
//                                 <span class="fa fa-tasks fa-fw mr-3"></span>
//                                 <span class="menu-collapsed">Tasks</span>
//                             </div>
//                         </a>

//                         <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
//                             <small>OPTIONS</small>
//                         </li>

//                         <a href="#" class="bg-dark list-group-item list-group-item-action">
//                             <div class="d-flex w-100 justify-content-start align-items-center">
//                                 <span class="fa fa-calendar fa-fw mr-3"></span>
//                                 <span class="menu-collapsed">Calendar</span>
//                             </div>
//                         </a>
//                         <a href="#" class="bg-dark list-group-item list-group-item-action">
//                             <div class="d-flex w-100 justify-content-start align-items-center">
//                                 <span class="fa fa-envelope-o fa-fw mr-3"></span>
//                                 <span class="menu-collapsed">Messages <span class="badge badge-pill badge-primary ml-2">5</span></span>
//                             </div>
//                         </a>

//                         <li class="list-group-item sidebar-separator menu-collapsed"></li>

//                         <a href="#" class="bg-dark list-group-item list-group-item-action">
//                             <div class="d-flex w-100 justify-content-start align-items-center">
//                                 <span class="fa fa-question fa-fw mr-3"></span>
//                                 <span class="menu-collapsed">Help</span>
//                             </div>
//                         </a>
//                         <a href="#" data-toggle="sidebar-colapse" class="bg-dark list-group-item list-group-item-action d-flex align-items-center">
//                             <div class="d-flex w-100 justify-content-start align-items-center">
//                                 <span id="collapse-icon" class="fa fa-2x mr-3"></span>
//                                 <span id="collapse-text" class="menu-collapsed">Collapse</span>
//                             </div>
//                         </a>

//                         <li class="list-group-item logo-separator d-flex justify-content-center">
//                             <img src='https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg' width="30" height="30" />
//                         </li>
//                     </ul>
//                 </div>


//                 <div class="col">

//                     <h1>
//                         Collapsing Menu
//                         <small class="text-muted">Version 2.1</small>
//                     </h1>


//                     <div class="card">
//                         <h4 class="card-header">Requirements</h4>
//                         <div class="card-body">
//                             <ul>
//                                 <li>JQuery</li>
//                                 <li>Bootstrap 4 beta-3</li>
//                             </ul>
//                         </div>
//                     </div>



//                 </div>

//             </div>


//         </div >

//         // <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//         //     <div className='container-fluid px-2'>
//         //         <div className='row'>
//         //             <div className='col-lg col-sm-2 min-vh-100 d-flex justify-content-between flex-column'>
//         //                 <div className='mt-2'>
//         //                     <button className='btn btn-primary d-block d-sm-none' onClick={toggleSidebar}>ruyige
//         //                         {/* <i className='bi bi-list'></i> */}
//         //                     </button>
//         //                     <a className='text-decoration-none text-white d-flex align-items-center text-white d-none d-sm-inline ms-4 mt-2' role='button'>
//         //                         {/* <i className='bi bi'></i> */}
//         //                         <span className='ms-2'>Main</span>
//         //                     </a>
//         //                     <hr className='text-white d-none d-sm-block' />

//         //                     <ul className='nav nav-pills flex-column mt-2 mt-sm-0' id='parentM'>
//         //                         <li className='nav-item my-1 py-2 py-sm-0'>
//         //                             <a href='#' className='nav-link text-white text-center text-sm-start' aria-current='page'>
//         //                                 {/* <i className='bi bi-speedometer2'></i> */}
//         //                                 <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
//         //                             </a>
//         //                         </li>
//         //                         <li className='nav-item my-1 py-2 py-sm-0 '>
//         //                             <a href='#submenu' className='nav-link text-white text-center text-sm-start' data-bs-toggle='collapse' aria-current='page' aria-expanded='false'>
//         //                                 {/* <i className='bi bi-'></i> */}
//         //                                 <span className='ms-2 d-none d-sm-inline'>Products</span>
//         //                                 {/* <i className='bi bi-arrow-down-short ms-0 ms-sm-3'></i> */}
//         //                             </a>
//         //                             <ul className='nav collapse ms-2 flex-column' id='submenu' data-bs-parent='#parentM'>
//         //                                 <li className='nav-item'>
//         //                                     <a href='#' className='nav-link text-white' aria-current='page'>
//         //                                         <span className='d-none d-sm-inline'>Item</span>1</a>
//         //                                 </li>
//         //                                 <li className='nav-item'>
//         //                                     <a href='#' className='nav-link text-white' aria-current='page'>
//         //                                         <span className='d-none d-sm-inline'>Item</span>2</a>
//         //                                 </li>
//         //                             </ul>
//         //                         </li>
//         //                         <li className='nav-item my-1 py-2 py-sm-0'>
//         //                             <a href='#' className='nav-link text-white text-center text-sm-start fs-6' aria-current='page'>
//         //                                 {/* <i className='bi bi-table'></i> */}
//         //                                 <span className='ms-2 d-none d-sm-inline'>Customers</span>
//         //                             </a>
//         //                         </li>
//         //                         <li className='nav-item my-1 py-2 py-sm-0'>
//         //                             <a href='#' className='nav-link text-white text-center text-sm-start fs-6' aria-current='page'>
//         //                                 {/* <i className='bi bi-house'></i> */}
//         //                                 <span className='ms-2 d-none d-sm-inline'>House</span>
//         //                             </a>
//         //                         </li>
//         //                         <li className='nav-item my-1 py-2 py-sm-0'>
//         //                             <a href='#' className='nav-link text-white text-center text-sm-start fs-6' aria-current='page'>
//         //                                 {/* <i className='bi bi-'></i> */}
//         //                                 <span className='ms-2 d-none d-sm-inline' onClick={logOut}>Log Out</span>
//         //                             </a>
//         //                         </li>
//         //                     </ul>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//     );
// }

// export default Sidebar;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/collapse';
// import { FaBars, FaHome, FaPlug, FaUser } from 'react-icons/fa';
// import '../Css/css.css';
// import { Navigate, useNavigate } from 'react-router-dom';


// const Sidebar = () => {
//     const [isToggled, setIsToggled] = useState(false);
//     const navigate = useNavigate();

//     const handleToggle = () => {
//         setIsToggled(!isToggled);
//     };

//     const handleLogout = () => {
//         localStorage.clear();
//         navigate('/');
//     };


//     return (
//         <div id="wrapper" className={isToggled ? 'toggled' : ''}>
//             <aside id="sidebar-wrapper">
//                 <div className="sidebar-brand">
//                     <h2>Main Dashboard</h2>
//                 </div>
//                 <ul className="sidebar-nav">
//                     <li>
//                         <a href="#"><FaHome />Dashboard</a>
//                     </li>

//                     <li>
//                         <a href="#"><FaPlug />Home</a>
//                     </li>
//                     <li>
//                         <a href="#"><FaUser />Customer</a>
//                     </li>
//                 </ul>
//             </aside>

//             <div id="navbar-wrapper">
//                 <nav className="navbar navbar-inverse">
//                     <div className="container-fluid">
//                         <div className="navbar-header">
//                             <a href="#" className="navbar-brand" id="sidebar-toggle" onClick={handleToggle}>
//                                 <FaBars />
//                             </a>
//                             <button onClick={handleLogout}>Log Out</button>
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             {/* <section id="content-wrapper">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <h2 className="content-title">Test</h2>
//                         <p>Lorem ipsum...</p>
//                     </div>
//                 </div>
//             </section> */}
//         </div>
//     );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/collapse';
// import { FaBars, FaHome, FaPlug, FaUser } from 'react-icons/fa';
// import '../Css/css.css';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//     const [isToggled, setIsToggled] = useState(false);
//     const navigate = useNavigate();


//     const handleToggle = () => {
//         setIsToggled(!isToggled);
//     };

//     const handleLogout = () => {
//         localStorage.clear();
//         navigate('/');
//     };


//     return (
//         <div id="wrapper" className={isToggled ? 'toggled' : ''}>
//             <aside id="sidebar-wrapper">
//                 <div className="sidebar-brand">
//                     <h2>Main Dashboard</h2>
//                 </div>
//                 <ul className="sidebar-nav">
//                     <li>
//                         <a href="#">
//                             <FaHome /> Dashboard
//                         </a>
//                         <ul>
//                             <li><a href="#">Dashboard 1</a></li>
//                             <li><a href="#">Dashboard 2</a></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="#"><FaPlug /> Home</a>
//                     </li>
//                     <li>
//                         <a href="#" >
//                             <FaUser /> Customer
//                         </a>
//                         <ul>
//                             <li><a href="#">Customer 1</a></li>
//                             <li><a href="#">Customer 2</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </aside>

//             <div id="navbar-wrapper">
//                 <nav className="navbar navbar-inverse">
//                     <div className="container-fluid">
//                         <div className="navbar-header">
//                             <a href="#" className="navbar-brand" id="sidebar-toggle" onClick={handleToggle}>
//                                 <FaBars />
//                             </a>
//                             <button onClick={handleLogout}>Log Out</button>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaBars, FaHome, FaPlug, FaUser } from 'react-icons/fa';
import '../Css/css.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (

        <div class="container-fluid">
            <div class="row flex-nowrap">
                {/* <!-- Sidebar --> */}
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        {/* <!-- Brand/logo --> */}
                        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline">Menu</span>
                        </a>

                        {/* <!-- Sidebar navigation --> */}
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            {/* <!-- Home --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle px-0">
                                    <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                                </a>
                            </li>

                            {/* <!-- Dashboard with submenu --> */}
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                                </a>
                                <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- Orders --> */}
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span>
                                </a>
                            </li>
                            {/* 
                            <!-- Bootstrap submenu --> */}
                            <li>
                                <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span>
                                </a>
                                <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- Products submenu --> */}
                            <li>
                                <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span>
                                </a>
                                <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1 </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2 </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3 </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4 </a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- Customers --> */}
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span>
                                </a>
                            </li>
                        </ul>
                        {/* 
                        <!-- Divider and user dropdown --> */}
                        <hr />
                        <div class="dropdown pb-4">
                            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="Profile" width="30" height="30" class="rounded-circle" />
                                <span class="d-none d-sm-inline mx-1">loser</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Main content area --> */}
                {/* <div class="col py-3">
                    <h3>Left Sidebar with Submenus</h3>
                    <p class="lead">An example 2-level sidebar with collapsible menu items. The menu functions like an "accordion" where only a single menu is open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                    <ul class="list-unstyled">
                        <li>
                            <h5>Responsive</h5>
                            Shrinks in width, hides text labels, and collapses to icons only on mobile.
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>


    )
};

export default Sidebar;
