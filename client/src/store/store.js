import { configureStore } from '@reduxjs/toolkit'
import BookingSlice from './slices/BookingSlice'
import ClinicSlice from './slices/ClinicSlice'
export default configureStore({
    reducer: {
        Booking:BookingSlice,
        Clinic:ClinicSlice,
    },
})