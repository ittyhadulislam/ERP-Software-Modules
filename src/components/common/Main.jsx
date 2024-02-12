import { Box } from "@mui/material";
import classes from "../../assets/styles/commonCSS/main/Main.module.css";

const Main = ({ children }) => {
    return (
        <>
            <Box className={classes.mainContainer}>
                {children}
            </Box>
        </>
    );
};

export default Main;