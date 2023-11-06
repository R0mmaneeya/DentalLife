import { createSlice , current} from '@reduxjs/toolkit'

const initialState = {
    selecClinic:[],
    selecTreat:[],
    selecDoc:[],
    date:[],
    status:[]
}
const BookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers:{
        SelecClinic:(state,action)=>{
            state.selecClinic = action.payload
            console.log(current(state))
        },
        AddDate:(state,action)=>{
            state.date = action.payload
        }
    }
})

export const { SelecClinic } = BookingSlice.actions
export default BookingSlice.reducer