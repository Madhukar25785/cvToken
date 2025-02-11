import React, { useState } from 'react';
import '../assets/Css/css.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState(null);

    const logOut = () => {
        localStorage.clear();
        navigate('/');
    };

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className='sidebar-main p-2 h-100'>
            <div className='m-2 bg-white rounded px-2'>
                <span className='brand-name fs-4'>CV TOKEN</span>
            </div>
            <hr className='text-dark' />
            <div className='sidebar-content'>
                <ul className='list-group'>
                    <li className='list-group-item py-2'>
                        <NavLink to='/dashboard' className='d-flex align-items-center'>
                            <i className='bi bi-speedometer2 fs-5 me-2'></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li className='list-group-item py-2' onClick={() => toggleSection('myAccount')}>
                        <div className='d-flex align-items-center'>
                            <i className='bi bi-person fs-5 me-2'></i>
                            <span>My Account</span>
                            <i className={`bi bi-caret-${openSection === 'myAccount' ? 'up' : 'down'} ms-auto`}></i>
                        </div>
                        {openSection === 'myAccount' && (
                            <ul className='list-unstyled'>
                                <li className='list-group-item py-2'>
                                    <NavLink to='/my-profile'>
                                        <span>My Profile</span>
                                    </NavLink>
                                </li>
                                <li className='list-group-item py-2'>
                                    <NavLink to='/change-password'>
                                        <span>Change Password</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className='list-group-item py-2'>
                        <NavLink to='/funding-management' className='d-flex align-items-center'>
                            <i className='bi bi-person-circle fs-5 me-2'></i>
                            <span>Funding Management</span>
                        </NavLink>
                    </li>

                    <li className='list-group-item py-2'>
                        <NavLink to='/staking' className='d-flex align-items-center'>
                            <i className='bi bi-table fs-5 me-2'></i>
                            <span>Staking</span>
                        </NavLink>
                    </li>

                    <li className='list-group-item py-2' onClick={() => toggleSection('bonusPortfolio')}>
                        <div className='d-flex align-items-center'>
                            <i className='bi bi-clipboard-data fs-5 me-2'></i>
                            <span>Bonus Portfolio</span>
                            <i className={`bi bi-caret-${openSection === 'bonusPortfolio' ? 'up' : 'down'} ms-auto`}></i>
                        </div>
                        {openSection === 'bonusPortfolio' && (
                            <ul className='list-unstyled'>
                                <li className='list-group-item py-2'>
                                    <NavLink to='/staking_income'>
                                        <span>Daily Staking Income</span>
                                    </NavLink>
                                </li>
                                <li className='list-group-item py-2'>
                                    <NavLink to='/direct_income'>
                                        <span>Direct Income</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className='list-group-item py-2'>
                        <NavLink to='/my-community' className='d-flex align-items-center'>
                            <i className='bi bi-people fs-5 me-2'></i>
                            <span>My Community</span>
                        </NavLink>
                    </li>

                    <li className='list-group-item py-2'>
                        <NavLink to='/withdrawal' className='d-flex align-items-center'>
                            <span>Withdrawal</span>
                        </NavLink>
                    </li>

                    <li className='list-group-item py-2'>
                        <NavLink to='/fund-transfer' className='d-flex align-items-center'>
                            <span>Fund Transfer</span>
                        </NavLink>
                    </li>

                    <li className='list-group-item py-2'>
                        <NavLink to='/help-desk' className='d-flex align-items-center'>
                            <span>Help Desk</span>
                        </NavLink>
                    </li>

                    <li className='list-group-item py-2' onClick={logOut}>
                        <div className='d-flex align-items-center'>
                            <i className='bi bi-power fs-6 me-3'></i>
                            <span>Log Out</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
