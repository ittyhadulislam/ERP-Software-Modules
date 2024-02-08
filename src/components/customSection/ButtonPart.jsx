import { Box, Grid } from '@mui/material';


const ButtonPart = ({ children }) => {
    return (
        <Box sx={{
            padding: "10px",
            border: "1px dashed",
            marginBottom: "10px",
        }}>
            <Grid container>
                {children}
            </Grid>
        </Box>
    );
};

export default ButtonPart;