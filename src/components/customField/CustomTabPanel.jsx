import { Tab, Tabs } from "@mui/material";

const CustomTabPanel = ({ file, handelTabChange, tabValue }) => {
    return (
        <Tabs
            onChange={handelTabChange}
            value={tabValue}
            sx={{
                marginBottom: "5px"
            }}
        >
            {
                file.map((tab, i) => {
                    // console.log(tab)
                    return (
                        <Tab label={tab.label} key={i} />
                    )
                })
            }
        </Tabs>
    );
};

export default CustomTabPanel;