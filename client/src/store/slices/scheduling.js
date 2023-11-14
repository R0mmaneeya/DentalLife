import { createSlice , current} from '@reduxjs/toolkit'
const initialState = {
    idclinic:null,
    namedent:null,
    carft:null,
    date:null,
    time:null
}
const shedulingSlice=createSlice(
    {
        name:"Sheduling",
        initialState,
        reducers:{
            addSheduId:(state,action)=>{
                state.idclinic = action.payload;
                console.log(current(state))
            },
            addSheduDent:(state,action)=>{
                state.namedent = action.payload;
                console.log(current(state))
            },
            addSheduCraft:(state,action)=>{
                state.carft = action.payload;
                console.log(current(state))
            },
            addSheduDate:(state,action)=>{
                state.date = action.payload;
                console.log(current(state))
            },
            addSheduTime:(state,action)=>{
                state.time = action.payload;
                console.log(current(state))
            }
        }
    }
)
export const {addSheduId,addSheduDent,addSheduCraft,addSheduDate,addSheduTime} = shedulingSlice.actions
export default shedulingSlice.reducer