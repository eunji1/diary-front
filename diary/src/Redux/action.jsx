import { googleAuthSlice } from 'src/Redux/googleAuthSlice';
import { monthCalendarSlice } from 'src/Redux/monthCalendarSlice';
import { weeklySlice } from 'src/Redux/weeklySlice';
import { dailySlice } from 'src/Redux/dailySlice';
import { stickerSlice } from 'src/Redux/stickerSlice';
import { monthSelectorSlice } from 'src/Redux/monthSelectorSlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const {
  setCalendar, getTodo, setTodo, delTodo, allDelTodo, editTodo,
} = monthCalendarSlice.actions;

export const {
  setWeekly, setlocWeek, setSelectedWeek, setTextContent, setMoveToWeek,
  setEditable, setWeeklyIsWriten,
} = weeklySlice.actions;

export const {
  setDaily, setDate, setEditor, setTitle, setSave, setDailyIsWriten, initDaily,
} = dailySlice.actions;

export const {
  setSticker,
  getStickers,
  removeSticker,
  setPosition,
  setResize,
  addTableSticker,
  setSelect,
  resetSelect,
} = stickerSlice.actions;

export const {
  setMonthRouter,
  setMoveToLastMonth,
  setMoveToNextMonth,
} = monthSelectorSlice.actions;
