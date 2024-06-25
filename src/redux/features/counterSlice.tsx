import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number
  }
  

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decreaseByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,incrementByAmount,decreaseByAmount } = counterSlice.actions

export default counterSlice.reducer