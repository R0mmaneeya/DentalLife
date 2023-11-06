import { createSlice } from "@reduxjs/toolkit";

//initial Data clinic
const initialState={
    id:[],
    name:["slfjls", "skdjfklj"],
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

export const {} = clinicSlice.actions
export default clinicSlice.reducer