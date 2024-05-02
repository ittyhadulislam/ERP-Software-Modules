import { createSlice } from '@reduxjs/toolkit'

const empInfo = createSlice({
    name: 'empInfo',
    initialState: {
        id: null,
        emp_id: null,
        emp_name: "",
        p_number: "",
        email: "",
        designation: "",
        filename: "",
        filepath: "",
        tableDataRedux: []
    },
    reducers: {
        setTableData: (state, action) => {
            state.tableDataRedux = action.payload
        }
    }
})

export const { setTableData } = empInfo.actions
export default empInfo.reducer