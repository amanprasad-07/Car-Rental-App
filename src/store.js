import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/appSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})