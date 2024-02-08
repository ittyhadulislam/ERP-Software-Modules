import { Box, Typography } from '@mui/material';
import classes from "../../assets/styles/commonCSS/footer/Footer.module.css";


const Footer = () => {
    return (
        <Box className={classes.footer}>
            <Box className={classes.footerContent}>
                <Box className={classes.copyRight}>
                    <Typography variant='p'>
                        Copyright © 2024 | Debonair Group | All rights reserved.
                    </Typography>
                </Box>
                <Box className={classes.currentPageAndVersion}>
                    <Typography variant='p'>
                        Current Page: | Version : , Build 1
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;