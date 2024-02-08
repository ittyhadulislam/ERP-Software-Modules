import { Box } from "@mui/material";
import classes from "../../assets/styles/commonCSS/main/Main.module.css";

const Main = ({ children }) => {
    return (
        <div>
            <Box className={classes.mainContainer}>
                {children}
            </Box>
        </div>
    );
};

export default Main;