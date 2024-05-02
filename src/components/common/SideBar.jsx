import { Box, Divider, } from "@mui/material";
import { useEffect } from 'react';
import logo from "../../assets/images/Logo.png";
import classes from "../../assets/styles/commonCSS/sidebar/SideBar.module.css";
import ListItems from './SubComSideBar/ListItems';

// eslint-disable-next-line react/prop-types
const SideBar = ({ activeInActive, sideBarRef, clickOutSideEvent = {} }) => {



    useEffect(() => {
        document.addEventListener("mousedown", clickOutSideEvent)

    }, [])

    return (
        <>
            <Box ref={sideBarRef} className={`${classes.sideNav} ${activeInActive ? classes.active : ""}`}>
                <Box className={classes.topSection}>
                    <Box className={classes.logo}>
                        <img src={logo} alt="logo" className={classes.logoImg} />
                    </Box>
                </Box>
                <Divider className={classes.divider} variant='middle' />
                <ListItems />
            </Box >
        </>
    );
};

export default SideBar;