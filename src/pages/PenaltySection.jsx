import { Box, Grid } from "@mui/material";
import { FaRegCheckCircle } from "react-icons/fa";
import CustomAutoComplete from "../components/customField/CustomAutoComplete";
import CustomButton from "../components/customField/CustomButton";
import CustomDataGrid from "../components/customField/CustomDataGrid";
import FormPart from "../components/customSection/FormPart";
import TablePart from "../components/customSection/TablePart";
import CustomDateTimePicker from './../components/customField/CustomDateTimePicker';
import CustomTextField from './../components/customField/CustomTextField';
import ButtonPart from './../components/customSection/ButtonPart';

const PenaltySection = () => {

    const AutocompleteOptions = [
        {
            comName: 'DG Info SYS',
            refID: 100,
            deptName: 'Admin',
            secName: "ERP",
            storeName: "General Store",
            mainCategory: "Winter Cloth",
            itemDescription: "Jacket",
            brand: "Adidas",
            unit: "1"
        },
        {
            comName: 'DG Info SYS',
            refID: 200,
            deptName: 'Admin',
            secName: "ERP",
            storeName: "General Store",
            mainCategory: "Winter Cloth",
            itemDescription: "Swatter",
            brand: "Nike",
            unit: "6"
        }

    ];

    return (
        <>
            <FormPart text="Add List">
                <Grid item xs={12} md={6}>
                    <CustomDateTimePicker label="Penalty Date" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomAutoComplete options={AutocompleteOptions.map(option => option.comName)} label="Employee ID" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomTextField type={"text"} label={"Employee name"} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomTextField type={"number"} label={"Penalty Amount"} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <CustomTextField type={"number"} label={"Penalty Amount"} multiline={true} />
                </Grid>
            </FormPart>
            <Box sx={{
                marginTop: "20px",
                padding: "25px",
                border: "1px solid #39A7FF",
                backgroundColor: "white",
            }}>
                <TablePart>
                    <CustomDataGrid />
                </TablePart>
                <Box sx={{ marginTop: "20px" }} />
                <ButtonPart>
                    <Grid item xs={12} md={7}>
                    </Grid>
                    <Grid item xs={12} md={1}>
                    </Grid>
                    <Grid item xs={12} md={4} display={"flex"} justifyContent={"end"}>
                        <CustomButton color={"success"} startIcon={<FaRegCheckCircle />}>Submit</CustomButton>
                    </Grid>
                </ButtonPart>
            </Box>

        </>
    );
};

export default PenaltySection;