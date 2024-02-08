// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, Typography } from '@mui/material';
import { FaRegUserCircle } from "react-icons/fa";
import classes from "../../../assets/styles/commonCSS/navbar/Account.module.css";

const Account = () => {
    return (
        <Box className={classes.account}>
            <Box className={classes.userName}>
                <Typography variant="body1" color="initial">Syed Ittyhadul Islam</Typography>
            </Box>
            <FaRegUserCircle size={25} />
        </Box>
    );
};

export default Account;