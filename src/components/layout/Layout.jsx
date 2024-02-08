import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../../assets/styles/globalCss/Layout.css";
import Footer from "../common/Footer";
import Main from "../common/Main";
import Navbar from "../common/Navbar";
import SideBar from "../common/SideBar";

const Layout = () => {
    const [isActive, setIsActive] = useState(false)

    const handelActiveInActive = () => {
        setIsActive(!isActive)
        console.log("handelActiveInActive")
    }


    return (
        <>
            <SideBar activeInActive={isActive} />
            <Box className={`column ${isActive ? "active" : ""}`}>
                <Navbar ActiveInActive={handelActiveInActive} />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Box>
        </>
    );
};

export default Layout;