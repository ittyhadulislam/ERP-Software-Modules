import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import CustomButton from '../../components/customField/CustomButton';
import CustomDataGrid from '../../components/customField/CustomDataGrid';
import ButtonPart from '../../components/customSection/ButtonPart';
import TablePart from '../../components/customSection/TablePart';

const PendingTable = () => {

    const { isClickInCheckbox, setIsClickInCheckbox } = useState(false)
    const [selectionModel, setSelectionModel] = useState();

    const column = [
        {
            field: "name",
            headerName: 'name',
            flex: 1,
            headerAlign: 'center',
            align: "center",
        },
        {
            field: "age",
            headerName: 'Age',
            flex: 1,
            headerAlign: 'center',
            align: "center",
        },
        {
            field: "email",
            headerName: 'Email',
            flex: 1,
            headerAlign: 'center',
            align: "center",
        },
    ]

    const rows = [
        {
            id: 1,
            name: "Azmain",
            age: 23,
            email: "az.walker30822@gmail.com",
            status: "pending"
        },
        {
            id: 2,
            name: "Adrita",
            age: 20,
            email: "ad.@gmail.com",
            status: "pending"
        },

    ]
    console.log(selectionModel);

    return (
        <Box sx={{
            marginTop: "5px",
            padding: "5px",
            border: "1px solid #39A7FF",
            backgroundColor: "white",
            borderRadius: "3px",
        }}>
            <TablePart>
                <CustomDataGrid
                    columns={column}
                    row={rows.map((row, index) => {
                        return {
                            ...row,
                            serial: index
                        }
                    })}
                    checkboxSelection
                    onRowSelectionModelChange={(ids) => {
                        // console.log(data)
                        const selectedIDs = new Set(ids);
                        console.log(selectedIDs)
                        const selectedRows = rows.filter(row => selectedIDs.has(row.id))
                        setSelectionModel(selectedRows)
                    }}
                // selectionModel={selectionModel}
                />
            </TablePart>
            <ButtonPart>
                <Grid item xs={12} md={7}>
                </Grid>
                <Grid item xs={12} md={1}>
                </Grid>
                <Grid item xs={12} md={4} display={"flex"} justifyContent={"end"} gap={1}>
                    {/* {
                                    !isUpdate ?
                                        <CustomButton color={"success"} startIcon={<IoMdCheckmarkCircleOutline />} handelSubmit={{}}>Complete</CustomButton>
                                        :
                                        <CustomButton color={"warning"} startIcon={<GrUpdate />} handelSubmit={{}}>Update</CustomButton>
                                } */}
                    {
                        <CustomButton color={"success"} disabled={isClickInCheckbox} startIcon={<IoMdCheckmarkCircleOutline />}>Complete</CustomButton>
                    }
                </Grid>
            </ButtonPart>
        </Box>
    );
};

export default PendingTable;