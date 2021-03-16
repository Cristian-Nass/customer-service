import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import usersReducer from './slices/user/user.reducer'

const reducer = combineReducers({
  usersReducer,
})


export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware().concat(logger)]
})
