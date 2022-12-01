import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import rootReducer, { RootState } from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<AppDispatch, void, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export { store };
