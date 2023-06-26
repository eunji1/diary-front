import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { stickerReducer } from 'src/Redux/stickerSlice';
import { googleAuthReducer } from 'src/Redux/googleAuthSlice';
import { monthCalendarReducer } from 'src/Redux/monthCalendarSlice';
import { weeklyReducer } from 'src/Redux/weeklySlice';
import { dailyReducer } from 'src/Redux/dailySlice';
import { monthSelectorReducer } from 'src/Redux/monthSelectorSlice';

const rootReducer = combineReducers({
  googleAuthReducer,
  monthCalendarReducer,
  weeklyReducer,
  dailyReducer,
  stickerReducer,
  monthSelectorReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
