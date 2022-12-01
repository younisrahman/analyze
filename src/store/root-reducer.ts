import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

import { AllSlice, FilteredSlice } from '../features';

const rootReducer = combineReducers({
  AllUser: AllSlice.reducer,
  FilteredUser: FilteredSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
