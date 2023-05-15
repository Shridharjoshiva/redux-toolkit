import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserDetails=createAsyncThunk("fetchUserDetails",async()=>{
    const response=await fetch("https://engineering-task.elancoapps.com/api/applications");
    return response.json();

});
export const fetchAppData =createAsyncThunk("fetchAppData",async()=>{
    const response=await fetch("https://engineering-task.elancoapps.com/api/applications");
    return response.json();
});


const userSlice=createSlice({
    name:"users",
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
        userDetails:[],
    },
    extraReducers:(builders)=>{
        builders.addCase(fetchUserDetails.pending,(state,action)=>{
            state.isLoading=true;
        });
        builders.addCase(fetchUserDetails.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builders.addCase(fetchUserDetails.rejected,(state, action)=>{
            state.isError=true;
        });
        builders.addCase(fetchAppData.pending,(state,action)=>{
            state.isLoading=true;
        });
        builders.addCase(fetchAppData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userDetails=action.payload;
        });
        builders.addCase(fetchAppData.rejected,(state, action)=>{
            state.isError=true;
        });
    },
});

export default userSlice.reducer;