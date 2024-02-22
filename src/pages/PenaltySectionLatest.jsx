
import { Tabs } from '@mui/material';
import { useState } from 'react';
import CustomCard from './../components/customField/CustomCard';



const PenaltySectionLatest = () => {

    const [tabValue, setTabValue] = useState(0)

    const handelTabChange = (e, value) => {
        setTabValue(value)
    }

    return (
        <>
            <CustomCard>
                <Tabs onChange={handelTabChange} value={tabValue}>

                </Tabs>
            </CustomCard>
        </>
    );
};

export default PenaltySectionLatest;