import { createSlice } from '@reduxjs/toolkit';

export interface State {
  users: Object;
  dates: Object;
}

const AllSlice = createSlice({
  name: 'all-slice',
  initialState: {
    users: {},
    dates: {},
  } as State,
  reducers: {
    setAllData(state: State, { payload }) {
      // ...
      state.users = payload;
    },
    setAllDates(state: State, { payload }) {
      // ...
      state.dates = payload;
    },
  },
});

export const { setAllData, setAllDates } = AllSlice.actions;
export default AllSlice;
