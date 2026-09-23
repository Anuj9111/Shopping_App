import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="w-full  ">
            <div className="w-full ">
                <ul className="flex justify-between text-xl bg-black text-white px-5 py-3">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/mycart">My Cart</Link></li>
                    <li><Link to="/myorder">My Order</Link></li>
                    <li><Link to="/setting">Settings</Link></li>
                    <li><Link to="/myprofile">My Profile</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    
                    
                </ul>
            </div>
            
        </div>
    )
}

export default Header ;