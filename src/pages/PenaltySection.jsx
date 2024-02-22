import { Box, Grid } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import CustomButton from "../components/customField/CustomButton";
import CustomDataGrid from "../components/customField/CustomDataGrid";
import CustomDateTimePicker from "../components/customField/CustomDateTimePicker";
import FormPart from "../components/customSection/FormPart";
import TablePart from "../components/customSection/TablePart";
import CustomAutoComplete from './../components/customField/CustomAutoComplete';
import CustomCard from './../components/customField/CustomCard';
import CustomTextField from './../components/customField/CustomTextField';
import ButtonPart from './../components/customSection/ButtonPart';

const columns = [
    {
        field: 'emp_id',
        headerName: 'Emp ID',
        flex: 1,
        headerAlign: 'center',
    },
    {
        field: 'emp_name',
        headerName: 'Employee Name',
        flex: 1,
        headerAlign: 'center',
    },
    {
        field: 'punishment_amount',
        headerName: 'Penalty Amount',
        flex: 1,
        headerAlign: 'center',
    },
    {
        field: 'punishment_date',
        headerName: 'Penalty Date',
        type: 'Date',
        flex: 1,
        headerAlign: 'center',
    },
];

const PenaltySection = () => {

    const [apiData, setApiData] = useState([])

    const [emp_id, setEmp_id] = useState(null)
    const [emp_name, setEmpName] = useState("")
    const [punishment_reson, setPunishment_Reason] = useState("")
    const [punishment_amount, setPunishment_Amount] = useState(null)
    const [punishment_date, setPunishment_Date] = useState(null)


    // ----- Get Functionality -----
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://192.168.100.186:8084/api/punishment_/GetAll`)
            setApiData(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    // ----- Post Functionality -----
    const postData = (newData) => {
        axios.post(`http://192.168.100.186:8084/api/punishment_/Create`, newData)
            .then(() => {
                setApiData((previousData) => [...previousData + newData]);
                fetchData()
            })
            .catch((error) => console.log(error));
    }


    const handelChangeName = (e) => {
        setEmpName(e.target.value)
    }
    const handelChangeAmount = (e) => {
        setPunishment_Amount(e.target.valueAsNumber)
    }
    const handelChangeDescription = (e) => {
        setPunishment_Reason(e.target.value)
    }
    const handelSelect = (e, newValue) => {
        setEmp_id(newValue)
    }
    const handelChangeDate = (date) => {
        setPunishment_Date(date)
    }

    const formateDate = dayjs(punishment_date).format('DD-MM-YYYY')

    const handelSubmit = (e) => {
        e.preventDefault()
        const data = {
            formateDate,
            emp_id,
            emp_name,
            punishment_reson,
            punishment_amount,
        }
        postData(data)
        clearField()
        console.log("clicked")
    }

    const clearField = () => {
        setEmpName("")
        setPunishment_Amount("")
        setPunishment_Reason("")
        setEmp_id(null)
    }




    return (
        <>
            <CustomCard>
                <FormPart text="Add Penalty List" handelSubmit={handelSubmit}>
                    <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                        <CustomAutoComplete options={apiData.map(option => String(option.emp_id))} label="Employee ID" handelSelect={handelSelect} value={emp_id} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                        <CustomTextField label={"Employee name"} handelChange={handelChangeName} value={emp_name} inputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                        <CustomTextField type={"number"} label={"Penalty Amount"} handelChange={handelChangeAmount} value={punishment_amount} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                        <CustomDateTimePicker label="Penalty Date" handelSelectDate={handelChangeDate} value={punishment_date} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <CustomTextField type={"text"} label={"Penalty Description"} multiline={true} handelChange={handelChangeDescription} value={punishment_reson} />
                    </Grid>
                </FormPart>
            </CustomCard>
            <Box sx={{
                marginTop: "5px",
                padding: "5px",
                border: "1px solid #39A7FF",
                backgroundColor: "white",
            }}>
                <TablePart>
                    <CustomDataGrid
                        row={apiData?.map((item, index) => {
                            return {
                                ...item,
                                serial: index + 1
                            }
                        })}
                        columns={columns}
                        checkboxSelection
                    />
                </TablePart>
                <Box sx={{ marginTop: "5px" }} />
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





// const [is_completed, setIs_Completed] = useState(false)
// const [completed_date, setCompleted_Date] = useState("2024-02-12T06:58:40.659Z")
// const [is_deleted, setIs_Deleted] = useState(false)
// const [deleted_date, setDeleted_Date] = useState("2024-02-12T06:58:40.659Z")


// const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

// console.log(apiData)

// console.log(emp_name)
// console.log(punishment_amount)
// console.log(punishment_reson)
// console.log(emp_id)
// console.log(punishment_date)