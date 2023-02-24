// store.ts
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { keyWordSearch } from '@/redux/keyWordSearch/reducer';

const reducer = combineReducers({
    keyWordSearch: keyWordSearch,
})

// create a makeStore function
export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
const makeStore = () =>
    configureStore({
        reducer: reducer,
        devTools: false,
    });
// export an assembled wrapper
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });