import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { staffLink } from "../../APILink/allAPIexport";


const staffListSlice = createSlice({
    name: 'staffList',

    initialState: { status: 'idle', staffs: []},

    reducers: {
        addStaff: (state, action) => {
            state.staffs.push(action.payload);
        },
        deleteStaff: (state, action) => {
            state.staffs.filter((message) => message.id !== action.payload)
        }
    },

    extraReducers: builder => {
        builder.addCase(fetchStaffs.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchStaffs.fulfilled, (state, action) => {
            console.log({action})
            state.staffs = action.payload;
            state.status = "idle";
        }).addCase(addNewStaff.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(addNewStaff.fulfilled, (state, action) => {
            state.staffs.push(action.payload);
            state.status = "idle";
        }).addCase(removeStaff.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(removeStaff.fulfilled, (state, action) => {
            state.staffs.filter((message) => message.id !== action.payload)
            state.status = "idle";  
        })
    }
})

export const fetchStaffs = createAsyncThunk('staffs/fetchStaffs', async () => {
    const res = await fetch(staffLink);
    const data = await res.json();
    return data
})

export const addNewStaff = createAsyncThunk('staffs/addNewStaff',async (newStaff) => {
    const res = await fetch(staffLink, {
    method: 'POST',
    body: JSON.stringify(newStaff),
    });
    const data = await res.json();
    return data;
    }
  );

export const removeStaff = createAsyncThunk('staffs/removeStaff',async (idStaff) => {
    const res = await fetch(staffLink + idStaff, {
      method: 'DELETE',
    });
    return fetchStaffs;
  }
);

export default staffListSlice;