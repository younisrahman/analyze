import { createSlice } from '@reduxjs/toolkit';

export interface State {
  filterUser: Object;
  filterDate: Object;
}

const FilteredSlice = createSlice({
  name: 'all-slice',
  initialState: {
    filterUser: {},
    filterDate: {},
  } as State,
  reducers: {
    setFilteredData(state: State, { payload }) {
      state.filterUser = payload;
    },
    setFilteredDate(state: State, { payload }) {
      state.filterDate = payload;
    },
  },
});

export const { setFilteredData, setFilteredDate } = FilteredSlice.actions;
export default FilteredSlice;
