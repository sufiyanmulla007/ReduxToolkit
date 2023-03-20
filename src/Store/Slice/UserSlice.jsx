import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
    adduser(state,action){
        state.push(action.payload);
        // console.log(action.payload);
    },
    removeuser(state,action){
        // console.log("hiii" + action.payload)
        // state.pop(action.payload)
        state.splice(action.payload, 1)

    },
    clearAllUser(state,action){
    //   console.log("hii delet")
    return [];
    },
    },
});

// console.log(UserSlice.actions);

export default UserSlice.reducer;

export const {adduser,removeuser,clearAllUser}= UserSlice.actions;