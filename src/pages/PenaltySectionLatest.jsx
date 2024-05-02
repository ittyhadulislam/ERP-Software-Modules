import { Box, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { GrUpdate } from "react-icons/gr";

import { MdSaveAlt } from "react-icons/md";
import CustomAutoComplete from '../components/customField/CustomAutoComplete';
import CustomButton from '../components/customField/CustomButton';
import CustomTabPanel from '../components/customField/CustomTabPanel';
import ButtonPart from '../components/customSection/ButtonPart';
import FormPart from '../components/customSection/FormPart';
import { DataContext } from '../context/DataProvider';
import CustomCard from './../components/customField/CustomCard';
import CompleteTable from './SubFilesForPenaltySection/CompleteTable';
import PendingTable from './SubFilesForPenaltySection/PendingTable';
import { tabListText } from './SubFilesForPenaltySection/TabListText';

const PenaltySectionLatest = () => {

    const { isUpdate } = useContext(DataContext)



    const [tabValue, setTabValue] = useState(0)


    const [emp_id, setEmp_id] = useState(null)
    // const [emp_name, setEmpName] = useState("")
    // const [punishment_reason, setPunishment_Reason] = useState("")
    // const [punishment_amount, setPunishment_Amount] = useState("")
    // const [punishment_date, setPunishment_Date] = useState(null)


    // console.log(punishment_reason)

    const handelTabChange = (e, value) => {
        setTabValue(value)
    }

    // console.log(tabValue)

    const TabPanel = ({ children, value, index }) => {
        return (
            <Box>
                {
                    value == index && (
                        children
                    )
                }
            </Box>
        )
    }

    // const handelChangeName = (e) => {
    //     setEmpName(e.target.value)
    // }
    // const handelChangeAmount = (e) => {
    //     setPunishment_Amount(e.target.valueAsNumber)
    // }
    // // const handelChangeDescription = (e) => {
    // //     setPunishment_Reason(e.target.value)
    // // }
    const handelSelect = (e, newValue) => {
        setEmp_id(newValue)
    }
    // const handelChangeDate = (date) => {
    //     setPunishment_Date(date)
    // }

    const apiData = [
        { emp_id: 1 },
        { emp_id: 2 },
        { emp_id: 3 },
    ]

    return (
        <>
            <CustomCard>
                <CustomTabPanel file={tabListText} handelTabChange={handelTabChange} tabValue={tabValue} />

                <TabPanel value={tabValue} index={0}>
                    <FormPart text={"Add Penalty Data"}>
                        <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                            <CustomAutoComplete options={apiData.map(option => String(option.emp_id))} label="Employee ID" handelSelect={handelSelect} value={emp_id} />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                            {/* <CustomTextField label={"Employee name"} handelChange={handelChangeName} value={emp_name} inputProps={{ readOnly: true, }} /> */}
                            {/* <CustomTextField label={"Employee name"} value={emp_name} inputProps={{ readOnly: true, }} /> */}
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>

                            {/* <CustomTextField type={"number"} label={"Penalty Amount"} handelChange={handelChangeAmount} value={punishment_amount} /> */}
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                            {/* <CustomDateTimePicker label="Penalty Date" handelSelectDate={handelChangeDate} value={punishment_date} /> */}
                        </Grid>
                        <Grid item xs={12} md={12}>
                            {/* <CustomTextField type={"text"} label={"Penalty Description"} multiline={true} handelChange={handelChangeDescription} value={punishment_reason} /> */}
                            {/* <CustomTextField label={"Description"} /> */}
                        </Grid>
                    </FormPart>
                    <ButtonPart>
                        <Grid item xs={12} md={7}>
                        </Grid>
                        <Grid item xs={12} md={1}>
                        </Grid>
                        <Grid item xs={12} md={4} display={"flex"} justifyContent={"end"} gap={1}>
                            {
                                !isUpdate ?
                                    <CustomButton color={"info"} startIcon={<MdSaveAlt />}>Save</CustomButton>
                                    :
                                    <CustomButton color={"warning"} startIcon={<GrUpdate />}>Update</CustomButton>
                            }
                        </Grid>
                    </ButtonPart>

                    <PendingTable />
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <CompleteTable />
                </TabPanel>
            </CustomCard>
        </>
    );
};

export default PenaltySectionLatest;