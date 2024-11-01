import { configureStore } from '@reduxjs/toolkit';

import checkReducer from './checkboxesSlice.js';
import tabReduser from './tabsSlice.js';
import ticketsReducer from './ticketsSlice.js';

export default configureStore({
  reducer: {
    checks: checkReducer,
    tabs: tabReduser,
    tickets: ticketsReducer,
  },
});
