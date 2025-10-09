import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../slice/user/uswer.slice.js'


export const store = configureStore({
  reducer: {
 userReducer,
  },
})