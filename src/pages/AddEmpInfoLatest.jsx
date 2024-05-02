import { Box, Grid, Stack } from '@mui/material';
import { MdDeleteForever, MdModeEditOutline, MdSaveAlt } from "react-icons/md";
import ShowImage from '../components/common/SubComImageUpload/ShowImage';
import CustomButton from '../components/customField/CustomButton';
import CustomCard from '../components/customField/CustomCard';
import CustomFileUpload from '../components/customField/CustomFileUpload';
import CustomTextField from '../components/customField/CustomTextField';
import ButtonPart from '../components/customSection/ButtonPart';
import FormPart from '../components/customSection/FormPart';
import { useGetEmpInfo } from '../redux/features/EmpInfo/queryEmpInfo';
import CustomDataGrid from './../components/customField/CustomDataGrid';
import CustomTableCellButton from './../components/customField/CustomTableCellButton';
import TablePart from './../components/customSection/TablePart';

const AddEmpInfoLatest = () => {

    const { data: empInfo, isLoading, isError, error } = useGetEmpInfo()
    // const { } = useSelector(state => state.empInfo)
    console.log(empInfo);

    const columns = [
        {
            field: "Action",
            headerName: "",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: () => {
                // console.log(row)
                return (
                    <Stack direction={"row"} gap={1}>
                        <CustomTableCellButton
                            startIcon={<MdModeEditOutline size={15} />}
                            backgroundColor={"#39A7FF"}
                            color={"#39A7FF"}
                        // handelClick={() => handelEdit(row?.row.id, row?.row)}
                        >
                            Edit
                        </CustomTableCellButton >

                        <CustomTableCellButton
                            startIcon={<MdDeleteForever size={15} />}
                            backgroundColor={"#FF1818"}
                            color={"#FF1818"}
                        // handelClick={() => deleteData(row?.row.id)}
                        >
                            Delete
                        </CustomTableCellButton >
                    </Stack>
                )
            }
        },
        {
            field: 'emp_id',
            headerName: 'Emp ID',
            flex: 1,
            headerAlign: 'center',
            align: "center",
        },
        {
            field: 'emp_name',
            headerName: 'Employee Name',
            flex: 1,
            headerAlign: 'center',
        },
        {
            field: 'p_number',
            headerName: 'Mobile Number',
            flex: 1,
            headerAlign: 'center',
            align: "center",
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'Date',
            flex: 1,
            headerAlign: 'center',
        },
        {
            field: 'designation',
            headerName: 'Designation',
            type: 'Date',
            flex: 1,
            headerAlign: 'center',
        },
    ];

    return (
        <>
            <CustomCard>
                <FormPart text={"Add Employee Info"}>
                    <Grid item xs={12} md={6}>
                        <Stack gap={2}>
                            <CustomTextField type={"text"} label={"Enter Name"} />
                            <CustomTextField type={"number"} label={"Enter Employee ID"} />
                            <CustomTextField type={"number"} label={"Enter Number"} />
                            <CustomTextField type={"email"} label={"Enter Email"} />
                            <CustomTextField type={"text"} label={"Enter Designation"} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
                            <ShowImage />
                            <CustomFileUpload />
                        </Stack>
                    </Grid>
                </FormPart>
                <ButtonPart>
                    <Grid item xs={12} md={7}>
                    </Grid>
                    <Grid item xs={12} md={1}>
                    </Grid>
                    <Grid item xs={12} md={4} display={"flex"} justifyContent={"end"} gap={1}>
                        <CustomButton color={"info"} startIcon={<MdSaveAlt />}>Save</CustomButton>
                    </Grid>
                </ButtonPart>
            </CustomCard>
            <Box sx={{
                marginTop: "5px",
                padding: "5px",
                border: "1px solid #39A7FF",
                backgroundColor: "white",
                borderRadius: "3px",
                // minWidth: "100%"
            }}>
                <TablePart>
                    <CustomDataGrid
                        columns={columns}
                        row={[]}
                    />
                </TablePart>
            </Box>
        </>
    );
};

export default AddEmpInfoLatest;