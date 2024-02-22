import { Box, Button, Tab, Tabs } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


const Practice = () => {
    // const value = useContext(DataContext)

    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const top100Films = [
        { id: 1, label: 'The Shawshank Redemption', year: 1994 },
        { id: 2, label: 'The Godfather', year: 1972 },
        { id: 3, label: 'The Godfather: Part II', year: 1974 },
        { id: 4, label: 'The Dark Knight', year: 2008 },
        { id: 5, label: '12 Angry Men', year: 1957 },
        { id: 6, label: "Schindler's List", year: 1993 },
    ];

    const columns = [
        {
            false: "Action",
            renderCell: (row) => {
                return (
                    <>
                        <button onClick={() => console.log(row?.row.id)}>Edit</button>{" ||| "}
                        <button onClick={() => handelDelete(row?.row.id)}>delete</button>
                    </>
                )
            }
        },
        {
            field: "label",
            headerName: "Label",
            flex: 1,
        },
        {
            field: "year",
            headerName: "Year",
            flex: 1,
        }
    ]

    const [arr, setArr] = useState([])

    const [data, setData] = useState(null)
    const [showYear, setShowYear] = useState("")

    useEffect(() => {
        if (data) {
            setShowYear(data?.year)
        }
        else {
            setShowYear("")
        }
    }, [data])

    const handelChange = (e, newValue) => {
        setData(newValue)
    }

    // console.log(data)
    // console.log(showYear)



    const [id, setID] = useState("")
    const [label, setLabel] = useState("")
    const [year, setYear] = useState("")

    // console.log(label)
    // console.log(year)

    // post

    const handelSubmit = () => {
        setArr((array) => [...array, { id, label, year }])
        setID("")
        setLabel("")
        setYear("")
    }

    useEffect(() => {
        setArr(top100Films)
    }, [])

    // delete

    const handelDelete = (id) => {
        setArr(arr.filter(array => array.id !== id))
    }

    // console.log(arr)

    const [val, setVal] = useState(0)

    const handTabsChange = (e, value) => {
        setVal(value)
    }

    const TabPanel = ({ children, value, index }) => {
        return (
            <div>
                {
                    value == index && (
                        <h1>{children}</h1>
                    )
                }
                {/* {value}
                {index} */}

            </div>
        )
    }


    const [val1, setVal1] = useState(0)


    const tabMenu = [
        {
            label: "Item 1"
        },
        {
            label: "Item 2"
        },
        {
            label: "Item 3"
        }
    ]


    const handelChangeTabs = (e, value) => {
        setVal1(value)
    }

    console.log(val1)

    const TabPanel1 = ({ children, value, index }) => {
        return (
            <Box>
                {
                    value == index && (
                        children
                    )
                }
            </Box>
        )
    }


    return (
        <div>
            {/* <h1>{value}</h1> */}
            <h1>Operation with AutoComplete and Text Field</h1>
            <br />
            <div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films.map(film => film)}
                    sx={{ width: 300 }}
                    onChange={handelChange}
                    value={data}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                <TextField disabled value={showYear} />
            </div>

            <br />
            <br />
            <br />

            <h1>Edit Feature in same text field</h1>
            <br />
            <div>
                <TextField onChange={(e) => { setID(e.target.value) }} value={id} placeholder='Enter Label' />{" | "}
                <TextField onChange={(e) => { setLabel(e.target.value) }} value={label} placeholder='Enter Label' />{" | "}
                <TextField onChange={(e) => { setYear(e.target.value) }} value={year} placeholder='Enter year' />
                <br /><br />
                <DataGrid
                    rows={arr}
                    columns={columns}
                />
                <br />
                <Button variant='outlined' onClick={handelSubmit}>Submit</Button>
            </div>

            <br />
            <br />
            <br />

            <h1>Tab | MUI</h1>

            <Tabs onChange={handTabsChange} value={val}>
                <Tab label="Item1" />
                <Tab label="Item2" />
                <Tab label="Item3" />
            </Tabs>
            <TabPanel value={val} index={0}>
                Item One Details
            </TabPanel>
            <TabPanel value={val} index={1}>
                Item Two Details
            </TabPanel>
            <TabPanel value={val} index={2}>
                Item Three Details
            </TabPanel>

            <br />
            <br />
            <br />

            <h1>Tab with dynamic | MUI</h1>

            <Tabs onChange={handelChangeTabs} value={val1}>
                {
                    tabMenu.map((tab, i) => {
                        return (

                            <Tab key={i} label={tab.label} />
                        )
                    })
                }
            </Tabs>
            <TabPanel1 value={val1} index={0}>
                <Box>
                    <TextField />
                </Box>
            </TabPanel1>


        </div>
    );
};

export default Practice;