import { Button } from '@mui/material';


const CustomTableCellButton = ({ startIcon, children, backgroundColor, handelClick, color }) => {

    const tableCellButton = {
        border: `1px solid ${backgroundColor}`,
        padding: "1px 10px",
        fontSize: "10px",
        color: { color },

        '&:hover': {
            backgroundColor: '#222222',
            boxShadow: 'none',
            border: `1px solid #222222`,
            color: "#ffffff",
        },
    }

    return (
        <Button
            sx={tableCellButton}
            startIcon={startIcon}
            onClick={handelClick}
        >
            {children}
        </Button>
    );
};

export default CustomTableCellButton;

// "#39A7FF"