import { Box, Typography } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import classes from "../../../assets/styles/commonCSS/navbar/ToggleAndTitle.module.css";

// eslint-disable-next-line react/prop-types
const ToggleAndTitle = ({ ActiveInActive }) => {
    return (
        <Box className={classes.toggleAndTitle}>
            <Box className={classes.toggle} onClick={ActiveInActive}>
                <IoMenu size={25}/>
            </Box>
            <Box className={classes.moduleTitle}>
                <Typography className={classes.moduleTitleText} variant='h6'>Penalty Module</Typography>
            </Box>
        </Box>
    );
};

export default ToggleAndTitle;