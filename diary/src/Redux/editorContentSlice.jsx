import { createSlice } from '@reduxjs/toolkit';

const calNAME = "editorContent";

export const editorContentSlice = createSlice({
  name: calNAME,
  initialState:{
    date :"",
    content:"",
  },
  reducers:{
    setEditorContent: (state, action) =>{
      const locdate = action.payload.locdate
      const html = action.payload.html
      state.content = html
      state.date = locdate
    }
  }
}); 

export const editorContentReducer = editorContentSlice.reducer;