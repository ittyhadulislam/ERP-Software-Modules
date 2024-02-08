import { Box } from "@mui/material";
import classes from "../../assets/styles/commonCSS/navbar/Navbar.module.css";
import Account from './SubComNavBar/Account';
import ToggleAndTitle from './SubComNavBar/ToggleAndTitle';


// eslint-disable-next-line react/prop-types
const Navbar = ({ ActiveInActive }) => {
    return (
        <Box className={classes.topBar}>
            <ToggleAndTitle ActiveInActive={ActiveInActive} />
            <Account />
        </Box>
    );
};

export default Navbar;