import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/UserContext';
import useAdmin from '../hook/useAdmin';

const AdminRoute = ({ children }) => {

    const { user, loding } = useContext(AuthContext);

    const [isAdmin, isAdminLoding] = useAdmin(user?.email)

    const location = useLocation();

    if (loding || isAdminLoding) {
        return (
            <>
                <div className="h-[80vh] w-[100%] flex justify-center items-center relative">
                    {/* <img className=' absolute z-50' src="https://flevix.com/wp-content/uploads/2021/06/Neon-Loading.gif" alt="" /> */}
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                </div>
            </>
        )
    }


    if (user && user?.uid && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;

};

export default AdminRoute;