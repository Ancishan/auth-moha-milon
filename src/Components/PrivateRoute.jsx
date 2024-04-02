import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }
    if(user){
       return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
PrivateRoute.PropTypes ={
    children: PropTypes.node
}