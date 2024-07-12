import { NavLink } from "react-router-dom";
import Logo from '../assets/react.svg'

function SideBar() {
    return <aside>
        <h1 className="logo" >
            <img src={Logo} alt="Demo Shop" />
            Demo Shop
            <ul className="side-nav">

                <li>
                    <NavLink to="/"> DashBoard</NavLink>

                </li>
                <li>
                    <NavLink to="/products"> Product</NavLink>
                </li>
                <li>
                    <NavLink to="/add-product"> Add New Product</NavLink>
                </li>
            </ul>

        </h1>

    </aside>;

}

export default SideBar;