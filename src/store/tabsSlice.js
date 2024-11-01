import { createSlice } from '@reduxjs/toolkit';

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    tab: 'cheap',
  },
  reducers: {
    onTab(state, tab) {
      if (state.tab != tab) return { tab: tab.payload };
      return state;
    },
  },
});

export const { onTab } = tabsSlice.actions;
export default tabsSlice.reducer;
