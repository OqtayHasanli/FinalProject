import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './slices/Loginslice'

export const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
})