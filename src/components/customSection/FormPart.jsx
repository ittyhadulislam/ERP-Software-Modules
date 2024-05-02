import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import { FaListUl } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const FormPart = ({ text, children }) => {
    return (
        <Box sx={{
            padding: "5px",
            border: "1px dashed",
            marginBottom: "5px",
        }}>
            <Card sx={{
                padding: "5px 5px",
                visibility: 0,
                // backgroundColor: "#0D3973",
                backgroundColor: "#39A7FF",
                color: "white"
            }}>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <FaListUl size={15} />
                    <Typography sx={{ fontSize: "15px" }}>{text}</Typography>
                </Stack>
            </Card>
            <Grid container spacing={1} sx={{
                marginTop: "3px",
                marginBottom: "3px",
            }}>
                {children}
            </Grid>
        </Box>
    );
};

export default FormPart;