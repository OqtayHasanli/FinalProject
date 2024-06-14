import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[{}],
  isLogin:true
}

export const LoginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = LoginSlice.actions

export default LoginSlice.reducer