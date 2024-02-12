import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { FaListUl } from "react-icons/fa6";
import { MdSaveAlt } from "react-icons/md";
import CustomButton from '../customField/CustomButton';
import ButtonPart from './ButtonPart';

// eslint-disable-next-line react/prop-types
const FormPart = ({ text, children, handelSubmit }) => {
    return (
        <Card variant='outlined' sx={{
            padding: "10px 10px 10px 10px",
            width: "100%"
        }}>
            <CardContent>
                <Box sx={{
                    padding: "10px",
                    border: "1px dashed",
                    marginBottom: "10px",
                }}>
                    <Card sx={{
                        padding: "5px 10px",
                        marginBottom: 2,
                        visibility: 0,
                        // backgroundColor: "#0D3973",
                        backgroundColor: "#39A7FF",
                        color: "white"
                    }}>
                        <Stack direction={"row"} spacing={1} alignItems={"center"}>
                            <FaListUl />
                            <Typography>{text}</Typography>
                        </Stack>
                    </Card>
                    <Grid container spacing={2}>
                        {children}
                    </Grid>
                </Box>
                <ButtonPart>
                    <Grid item xs={12} md={7}>
                    </Grid>
                    <Grid item xs={12} md={1}>
                    </Grid>
                    <Grid item xs={12} md={4} display={"flex"} justifyContent={"end"}>
                        <CustomButton color={"info"} startIcon={<MdSaveAlt />} handelSubmit={handelSubmit}>Save</CustomButton>
                    </Grid>
                </ButtonPart>
            </CardContent>
        </Card>
    );
};

export default FormPart;