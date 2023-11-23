import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FiShoppingCart } from "react-icons/fi";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        <li><NavLink to='/dashbord'>Dashbord</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        <li><NavLink to='/secret'>Our Secret</NavLink></li>
        <li><NavLink to='/'>
            <button className="flex gap-2">
                <FiShoppingCart className="text-xl" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </NavLink></li>
    </>
    return (
        <div className="navbar max-w-screen-2xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case">
                    <div>
                        <div className="text-xl">FlovorFiesta</div>
                        <div>Resturent</div>
                    </div>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="mr-2">
                            <img src={user?.photoURL} className="w-10 h-10 rounded-full" alt="user Img" />
                            {/* <span>{user?.displayName}</span> */}
                        </div>
                        <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
                    </> :
                        <Link to='/login' className="btn btn-primary">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;