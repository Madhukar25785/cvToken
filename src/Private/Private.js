// import React from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import { useAuth } from '../Authentication/AuthContext';
// import Sidebar from '../Dashboard/Sidebar';

// const Private = () => {
//     const { user } = useAuth(); // Access user from AuthContext

//     // If user is not logged in, redirect to login page
//     // if (user) {
//     //     return <Navigate to="/dashboard" replace />;
//     // }
//     // return (
//     //     <>
//     //         <div className="">
//     //             <Sidebar />
//     //             <div className="content">
//     //                 <Outlet />
//     //             </div>
//     //         </div>
//     //     </>
//     // );
//     return user ? <Outlet /> : <Navigate to="/dashboard" />;
// };

// export default Private;



import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Dashboard/Sidebar';

function Private() {
    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="dashboard-section container-fluid min-vh-100">
            <div className="row">
                {toggle && (
                    <div className="side col-4 col-md-2 vh-100 position-fixed">
                        <Sidebar />
                    </div>
                )}
                {toggle && <div className="col-4 col-md-2"></div>}
                <div className="col">
                    <Dashboard Toggle={Toggle} />

                </div>
            </div>
        </div>
    );
}

export default Private;

// import React from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import { useAuth } from '../Authentication/AuthContext'; // Adjust the path to your AuthContext

// const Private = () => {
//   const { isAuthenticated } = useAuth(); // Check your authentication method

//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };

// export default Private;

// import React, { useState } from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import { useAuth } from '../Authentication/AuthContext'; // Adjust the path to your AuthContext
// import Sidebar from '../Dashboard/Sidebar';
// import Dashboard from '../Dashboard/Dashboard';

// const Private = () => {
//     const { user } = useAuth();
//     const [toggle, setToggle] = useState(true);

//     if (user) {
//         return <Navigate to="/dashboard" replace />;
//     }

//     const Toggle = () => {
//         setToggle(!toggle);
//     };

//     return (
//         <div className="dashboard-section container-fluid min-vh-100">
//             <div className="row">
//                 {toggle && (
//                     <div className="side col-4 col-md-2 vh-100 position-fixed">
//                         <Sidebar />
//                     </div>
//                 )}
//                 {toggle && <div className="col-4 col-md-2"></div>}
//                 <div className="col">
//                     <Dashboard Toggle={Toggle} />
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Private;
