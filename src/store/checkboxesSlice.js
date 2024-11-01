import { createSlice } from '@reduxjs/toolkit';

const checkSlice = createSlice({
  name: 'checkbox',
  initialState: { all: true, without: true, one: true, two: true, three: true },
  reducers: {
    onAll(state) {
      if (state.all) return { all: false, without: false, one: false, two: false, three: false };
      return { all: true, without: true, one: true, two: true, three: true };
    },
    onWithout(state) {
      if (state.all) return { ...state, all: false, without: false };
      if (state.one && state.two && state.three) return { ...state, all: true, without: true };
      return { ...state, without: !state.without };
    },
    onOne(state) {
      if (state.all) return { ...state, all: false, one: false };
      if (state.without && state.two && state.three) return { ...state, all: true, one: true };
      return { ...state, one: !state.one };
    },
    onTwo(state) {
      if (state.all) return { ...state, all: false, two: false };
      if (state.without && state.one && state.three) return { ...state, all: true, two: true };
      return { ...state, two: !state.two };
    },
    onThree(state) {
      if (state.all) return { ...state, all: false, three: false };
      if (state.without && state.one && state.two) return { ...state, all: true, three: true };
      return { ...state, three: !state.three };
    },
  },
});

export const { onAll, onWithout, onOne, onTwo, onThree } = checkSlice.actions;
export default checkSlice.reducer;
