import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo.png"

const Header = () => {

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">Our Client</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-base-100 bg-opacity-30">
            <div className="container mx-auto">
                <div className="lg:navbar-start flex justify-between w-full">
                    <div className="logo">
                        <img className="w-[100px]" src={logo} alt="Logo" />
                    </div>
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;