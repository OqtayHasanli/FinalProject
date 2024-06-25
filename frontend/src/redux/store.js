import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './slices/Loginslice'
import BasketReducer from './slices/Basket'

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    basket: BasketReducer,
  },
})