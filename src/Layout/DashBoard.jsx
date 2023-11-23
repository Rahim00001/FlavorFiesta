import { NavLink, Outlet } from "react-router-dom";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { FaAddressBook, FaAlignJustify, FaCalendarAlt, FaCalendarCheck, FaHome, FaRegGrinStars, FaShoppingBasket, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FiHome className="text-xl" />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendarAlt className="text-xl" />
                            Resarvation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <FaWallet className="text-xl" />
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FiShoppingCart className="text-xl" />
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaRegGrinStars className="text-xl" />
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaCalendarCheck className="text-xl" />
                            My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome className="text-xl" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaAlignJustify className="text-xl" />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaShoppingBasket className="text-xl" />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FaAddressBook className="text-xl" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* content */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;