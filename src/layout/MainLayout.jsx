import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";



function MainLayout() {


    return (
        <main>
            <SideBar />
            <Outlet />
        </main>
    );
}

export default MainLayout
