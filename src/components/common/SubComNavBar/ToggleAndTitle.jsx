import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, Typography } from '@mui/material';
import classes from "../../../assets/styles/commonCSS/navbar/ToggleAndTitle.module.css";

// eslint-disable-next-line react/prop-types
const ToggleAndTitle = ({ ActiveInActive }) => {
    return (
        <Box className={classes.toggleAndTitle}>
            <div onClick={ActiveInActive}>
                <MenuOutlinedIcon className={classes.toggle} />
            </div>
            <Box className={classes.moduleTitle}>
                <Typography className={classes.moduleTitleText} variant='h6'>Penalty Module</Typography>
            </Box>
        </Box>
    );
};

export default ToggleAndTitle;