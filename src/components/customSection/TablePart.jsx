import { Box } from '@mui/material';

const TablePart = ({ children }) => {
    return (
        <Box sx={{
            height: "430px",
        }}>
            {children}
        </Box>
    );
};

export default TablePart;