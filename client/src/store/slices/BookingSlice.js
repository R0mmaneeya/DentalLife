import { createSlice , current} from '@reduxjs/toolkit'

const initialState = {
    selecClinic:"clinic",
    selecTreat:"treats",
    selecDoc:"Doc",
    date:"date",
    status:"state"
}
const BookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers:{
        addClinic:(state,action)=>{
            state.selecClinic = action.payload
            console.log(current(state))
        },
        AddTreat:(state,action)=>{
            state.selecTreat = action.payload
        },
        AddDoc:(state,action)=>{
            state.selecDoc = action.payload
        },
        AddDate:(state,action)=>{
            state.date = action.payload
        },
        AddStatus:(state,action)=>{
            state.status = action.payload
        }
    }
})

export const { addClinic,AddTreat,AddDoc,AddDate,AddStatus } = BookingSlice.actions
export default BookingSlice.reducer