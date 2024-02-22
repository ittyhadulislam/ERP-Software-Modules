import { Box, Card } from '@mui/material';


const CustomCard = ({ children }) => {
    return (
        <Card variant='outlined' sx={{
            padding: "1px",
            width: "100%",
        }}>
            <Box sx={{
                padding: "5px",
            }}>
                {children}
            </Box>
        </Card>
    );
};

export default CustomCard;