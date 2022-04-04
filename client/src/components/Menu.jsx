import { NavLink } from "react-router-dom";

const Menu = () => {

    return(
        <nav className="menu">
            <ul className="menu-ul">
                <li className="menu-li"> <NavLink to="/"> Now </NavLink> </li>
                <li className="menu-li"> <NavLink to="/twodays"> 48 hours </NavLink> </li>
                <li className="menu-li"> <NavLink to="/week"> Week </NavLink> </li>
            </ul>
        </nav>
    )
}

export default Menu;