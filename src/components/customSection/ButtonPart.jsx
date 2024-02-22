import { Box, Grid } from '@mui/material';


const ButtonPart = ({ children }) => {
    return (
        <Box sx={{
            padding: "5px",
            border: "1px dashed",
        }}>
            <Grid container>
                {children}
            </Grid>
        </Box>
    );
};

export default ButtonPart;