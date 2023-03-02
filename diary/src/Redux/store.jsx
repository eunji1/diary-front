import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { googleAuthReducer } from './googleAuthSlice';
import { calendarReducer } from './calendarSlice';
import { weeklyReducer } from './weeklySlice';
import { dailyReducer } from './dailySlice';

const rootReducer = combineReducers({googleAuthReducer, calendarReducer, weeklyReducer, dailyReducer})

export const store = configureStore({
  reducer: rootReducer,
});
