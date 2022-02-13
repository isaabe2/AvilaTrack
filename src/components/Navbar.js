import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";




function Navbar() {
    let navigate = useNavigate()

    return (
        <div className="Nav">
            <header class='logo'><a onClick={()=> navigate("/home")}>
                AvilaTrack
                <input class='s' type="text" placeholder="Search.."></input>
            </a></header>
            <Outlet/>
        </div>
    );
}

export default Navbar;


/*const Navbar = () => {
    return(
        <div className="Nav">
            <header class='logo'>
                AvilaTrack
                <input class='s' type="text" placeholder="Search.."></input>
            </header>
        </div>
    )


}

export default Navbar*/