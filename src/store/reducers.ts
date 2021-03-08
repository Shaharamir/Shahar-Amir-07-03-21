import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from './appReducers';

const rootReducer = combineReducers({
    counter: counterSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer };