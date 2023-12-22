import { useContext } from "react";
import { FaHome, FaListAlt, FaLongArrowAltUp, FaPlusCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch(error => console.log(error));
    }
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-teal-700">
                {
                    user &&
                    <div className="text-center my-8">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full">
                                {
                                    user.photoURL ? <>
                                        <img src={user.photoURL} />
                                    </>
                                    : <img src="https://i.ibb.co/TH1VvtS/585e4bf3cb11b227491c339a.png" />
                                }
                            
                            </div>
                        </label>
                        <h3 className="text-4xl capitalize font-bold">{user.displayName ? user.displayName : user.email}</h3>
                    </div>
                    
                }
                <ul className="menu text-white text-xl">
                    <li>
                        <NavLink to="userHome"><FaHome />Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="addItems"><FaPlusCircle />Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="manageItems"><FaListAlt />Manage Items</NavLink>
                    </li>
                    <div className="divider color">or</div>
                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    {
                    user && 
                    <li onClick={handleLogOut}>
                        <NavLink><FaLongArrowAltUp />Logout</NavLink>
                    </li>
                    }
                </ul>
            </div>
            <div className="flex-1 mx-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;