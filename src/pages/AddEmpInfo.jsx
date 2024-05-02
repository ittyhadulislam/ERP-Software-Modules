import { Box, Grid, Stack } from '@mui/material';
import { useContext } from 'react';
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever, MdModeEditOutline, MdSaveAlt } from "react-icons/md";
import CustomButton from '../components/customField/CustomButton';
import CustomCard from '../components/customField/CustomCard';
import CustomFileUpload from '../components/customField/CustomFileUpload';
import CustomTableCellButton from '../components/customField/CustomTableCellButton';
import CustomTextField from '../components/customField/CustomTextField';
import ButtonPart from '../components/customSection/ButtonPart';
import TablePart from '../components/customSection/TablePart';
import { DataContext } from '../context/DataProvider';
import ShowImage from './../components/common/SubComImageUpload/ShowImage';
import CustomDataGrid from './../components/customField/CustomDataGrid';
import FormPart from './../components/customSection/FormPart';

const AddEmpInfo = () => {

    const
        {
            getPersonData,
            tableDataLoading,
            HandelPostData,
            handelEdit,
            handelUpdate,
            isUpdate,
            deleteData,
            handelFileChange,
            handelFileUpload,
            fileRef,
            file,
            handelAddName,
            handelAddID,
            handelAddNumber,
            handelAddEmail,
            handelAddDesignation,
            emp_name,
            emp_id,
            p_number,
            email,
            designation,
            formRef
        } = useContext(DataContext)



    // ----- Data Grid Columns -----

    const columns = [
        {
            field: "Action",
            headerName: "",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: (row) => {
                // console.log(row)
                return (
                    <Stack direction={"row"} gap={1}>
                        <CustomTableCellButton
                            startIcon={<MdModeEditOutline size={15} />}
                            backgroundColor={"#39A7FF"}
                            color={"#39A7FF"}
                            handelClick={() => handelEdit(row?.row.id, row?.row)}
                        >
                            Edit
                        </CustomTableCellButton >

                        <CustomTableCellButton
                            startIcon={<MdDeleteForever size={15} />}
                            backgroundColor={"#FF1818"}
                            color={"#FF1818"}
                            handelClick={() => deleteData(row?.row.id)}
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
                <form ref={formRef} >
                    <FormPart text={"Add Employee Info"}>
                        <Grid item xs={12} md={6}>
                            <Stack gap={2}>
                                <CustomTextField type={"text"} label={"Enter Name"} inputProps={{ maxLength: 20 }} handelChange={handelAddName} value={emp_name} required />
                                <CustomTextField type={"text"} label={"Enter Employee ID"} handelChange={handelAddID} value={emp_id} required />
                                <CustomTextField type={"number"} label={"Enter Number"} handelChange={handelAddNumber} value={p_number} required />
                                <CustomTextField type={"email"} label={"Enter Email"} handelChange={handelAddEmail} value={email} required />
                                <CustomTextField type={"text"} label={"Enter Designation"} handelChange={handelAddDesignation} value={designation} required />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
                                <ShowImage file={file} />
                                <CustomFileUpload fileRef={fileRef} file={file} handelFileChange={handelFileChange} handelFileUpload={handelFileUpload} />
                            </Stack>
                        </Grid>
                    </FormPart>
                    <ButtonPart>
                        <Grid item xs={12} md={7}>
                        </Grid>
                        <Grid item xs={12} md={1}>
                        </Grid>
                        <Grid item xs={12} md={4} display={"flex"} justifyContent={"end"} gap={1}>
                            {/* {
                                !isUpdate ?
                                    <CustomButton color={"warning"} startIcon={<GrUpdate />} styleButton={{ display: "none" }}>Update</CustomButton>
                                    :
                                    <CustomButton color={"warning"} startIcon={<GrUpdate />} handelSubmit={handelUpdate}>Update</CustomButton>
                            }
                            <CustomButton color={"info"} disabled={isUpdate} startIcon={<MdSaveAlt />} handelSubmit={handelSubmitForm}>Save</CustomButton> */}
                            {
                                !isUpdate ?
                                    <CustomButton color={"info"} startIcon={<MdSaveAlt />} handelSubmit={HandelPostData}>Save</CustomButton>
                                    :
                                    <CustomButton color={"warning"} startIcon={<GrUpdate />} handelSubmit={handelUpdate}>Update</CustomButton>
                            }
                        </Grid>
                    </ButtonPart>
                </form>
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
                        row={
                            getPersonData?.map((data, index) => {
                                return {
                                    ...data,
                                    serial: index
                                }
                            })
                        }
                        loading={tableDataLoading}
                    />
                </TablePart>
            </Box>
        </>
    );
};

export default AddEmpInfo;