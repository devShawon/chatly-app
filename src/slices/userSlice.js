import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('loginUser') ? JSON.parse(localStorage.getItem('loginUser')) : null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { userValue } = userSlice.actions

export default userSlice.reducer