import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid';



const CustomDataGrid = ({ row }) => {
    console.log(row)
    const gridStyle =
    {
        borderTopLeftRadius: "0px !important",
        borderTopRightRadius: "0px !important",
        borderBottomLeftRadius: "0px !important",
        borderBottomRightRadius: "0px !important",
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#222222",
            color: "#ffffff",
            borderRadius: 0,
            fontSize: 14,
            textTransform: "capitalize",
            fontWeight: "500",
        },
        "& .MuiDataGrid-cellContent": {
            fontSize: 14,
        },
        "& .MuiDataGrid-virtualScrollerRenderZone": {
            "& .MuiDataGrid-row": {
                "&:nth-of-type(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
            },
            "& .MuiDataGrid-cell:focus-within": {
                outline: "none",
            },
        },
    }

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

    // const handleGetRowId = (e) => {
    //     console.log(e);
    // }
    // handleGetRowId()
    // const rows = [
    //     // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    //     // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    //     // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    //     // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    //     // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];

    const StyledGridOverlay = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        '& .ant-empty-img-1': {
            fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
        },
        '& .ant-empty-img-2': {
            fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
        },
        '& .ant-empty-img-3': {
            fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
        },
        '& .ant-empty-img-4': {
            fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
        },
        '& .ant-empty-img-5': {
            fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
            fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#ffffff',
        },
    }));

    function CustomNoRowsOverlay() {
        return (
            <StyledGridOverlay>
                <svg
                    width="120"
                    height="100"
                    viewBox="0 0 184 152"
                    aria-hidden
                    focusable="false"
                >
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(24 31.67)">
                            <ellipse
                                className="ant-empty-img-5"
                                cx="67.797"
                                cy="106.89"
                                rx="67.797"
                                ry="12.668"
                            />
                            <path
                                className="ant-empty-img-1"
                                d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                            />
                            <path
                                className="ant-empty-img-2"
                                d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                            />
                            <path
                                className="ant-empty-img-3"
                                d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                            />
                        </g>
                        <path
                            className="ant-empty-img-3"
                            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                        />
                        <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
                            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
                            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
                        </g>
                    </g>
                </svg>
                <Box sx={{ mt: 1 }}>No Rows</Box>
            </StyledGridOverlay>
        );
    }

    return (
        <DataGrid
            getRowId={(row) => row?.serial}
            rows={row?.length > 0 ? row : []}
            columns={columns}
            slots={{
                toolbar: () => {
                    return <GridToolbarContainer>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <GridToolbarColumnsButton />
                                <GridToolbarDensitySelector />
                                <GridToolbarExport />
                            </Box>
                            <Box>
                                <GridToolbarQuickFilter />
                            </Box>
                        </Box>
                    </GridToolbarContainer>
                },
                noRowsOverlay: CustomNoRowsOverlay,
            }}
            initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25, 100]}
            checkboxSelection
            disableRowSelectionOnClick
            columnHeaderHeight={35}
            rowHeight={30}
            showCellVerticalBorder
            showColumnVerticalBorder
            sx={gridStyle}
        />
    );
};

export default CustomDataGrid;