import { Box } from '@mui/material';
import CustomDataGrid from '../../components/customField/CustomDataGrid';
import TablePart from '../../components/customSection/TablePart';

const CompleteTable = () => {
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
                    columns={[]}
                    row={[]}
                />
            </TablePart>
        </Box>
    );
};

export default CompleteTable;