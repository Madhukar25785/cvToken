import React, { useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Nav from '../Dashboard/Navbar';


const PrivateLayout = ({ children }) => {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };


    return (
        <div className="dashboard-section container-fluid min-vh-100">
            <Nav Toggle={handleToggle} />
            <div className='row'>
                {toggle && (
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <Sidebar />
                    </div>
                )}
                <div className="col-lg-10 col-md-9 col-sm-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PrivateLayout