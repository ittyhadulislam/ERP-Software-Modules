import { Button } from '@mui/material';
import classes from "../../assets/styles/customFieldCss/CustomButton.module.css";
// eslint-disable-next-line react/prop-types
const CustomButton = ({ color, children, startIcon, endIcon }) => {
    return (
        <Button
            variant='contained'
            color={color}
            className={classes.btn}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {children}
        </Button>
    );
};

export default CustomButton;