import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import filterSlide from "../Components/Staff/filterSlide";
import staffListSlide from "../Components/Staff/staffListSlide";


const store = configureStore({
    reducer: {
      filters: filterSlide.reducer,
      staffList: staffListSlide.reducer,
    },
    middleware: [loggerMiddleware, thunkMiddleware],
    enhancers: [monitorReducerEnhancer]
  })
  
export default store; 