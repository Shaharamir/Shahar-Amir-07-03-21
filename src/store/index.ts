import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { rootReducer } from './reducers';
import middleware from './middlewares';

const store = configureStore({
    reducer: rootReducer,
    middleware
});


export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();