import { createSlice } from '@reduxjs/toolkit';

const SEARCH_TERM = 'searchTerm';

export const searchTermSlice = createSlice({
  name: SEARCH_TERM,
  initialState: {
    searchTerm: localStorage.getItem(SEARCH_TERM) || '',
  },
  reducers: {
    setSearchTermRedux: (state, action) => {
      state.searchTerm = action.payload;
      localStorage.setItem(SEARCH_TERM, action.payload);
    },
  },
});

export const { setSearchTermRedux } = searchTermSlice.actions;
export default searchTermSlice.reducer;
