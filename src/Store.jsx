import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./feature/CountrySlice"
import modalReducer from './feature/ModalSlice'

export const store = configureStore({
    reducer: {
        Country: countryReducer,
        Modal: modalReducer,
    }

})