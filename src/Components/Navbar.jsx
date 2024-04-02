import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

    // sign out 1st step
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        LogOut()
        .then(() => console.log('succesfully'))
        .catch(error => console.log(error))
    }

    const navLinks = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/logIn">LogIn</NavLink></li>
        <li> <NavLink to="/registration">Registration</NavLink></li>
    </>

    return (
       <div className="container mx-auto px-10">
         <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    // user && <span>{user.email}</span>
                    user ? <>
                    <span>{user.email}</span>
                    <a onClick={handleLogOut} className="btn">Sign Out</a>
                    </> :
                    <Link to='/login'>
                       <button  className="btn">Login</button>
                        </Link>
                }
                
            </div>
        </div>
       </div>
    );
};

export default Navbar;