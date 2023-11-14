import { configureStore } from '@reduxjs/toolkit'
import BookingSlice from './slices/BookingSlice'
import ClinicSlice from './slices/ClinicSlice'
import ClientSlice from './slices/ClientSlice'
import scheduling from './slices/scheduling'
export default configureStore({
    reducer: {
        Booking:BookingSlice,
        Clinic:ClinicSlice,
        Client:ClientSlice,
        Scheduling:scheduling
    },
})