import { createSlice } from "@reduxjs/toolkit";

//initial Data clinic
const initialState={
    id:[],
    name:["slfjls", "skdjfklj","dsifjdskj"],
    branchOfClinic:[],
    imageClinic:[],
    idDentist:[],
    email:[],
    password:[],
}

const clinicSlice = createSlice(
    {
        name:"Clinic",
        initialState,
        reducers:{
            Add:(state,action)=>{
                state.name = action.payload
            }
        }
    }
)
console.log(clinicSlice)

export const {Add} = clinicSlice.actions
export default clinicSlice.reducer