import { Box } from "@mui/material";
import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import "../../assets/styles/globalCss/Layout.css";
import Footer from "../common/Footer";
import Main from "../common/Main";
import Navbar from "../common/Navbar";
import SideBar from "../common/SideBar";

const Layout = () => {
    const [isActive, setIsActive] = useState(false)
    const sideNavRef = useRef()

    const handelActiveInActive = () => {
        setIsActive(!isActive)
        // console.log("handelActiveInActive")
    }
    const clickOutSideEvent = () => {
        setIsActive(false)
    }

    return (
        <Box className="container">
            <SideBar activeInActive={isActive} sideBarRef={sideNavRef} clickOutSideEvent={clickOutSideEvent} />
            <Box className={`column ${isActive ? "active" : ""}`}>
                {/* <h1>Hello</h1> */}
                <Navbar ActiveInActive={handelActiveInActive} />
                <Main>
                    {/* Hello */}
                    <Outlet />
                </Main>
                <Footer />
            </Box>
        </Box>
    );
};

export default Layout;