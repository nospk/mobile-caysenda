// store.ts
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { AnyAction, Action, combineReducers } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import keyword from './keyWordSearch';

const reducer = combineReducers({
    counter: keyword.reducer,
})
// create your reducer
// const reducer = (state: State = { tick: [] }, action: AnyAction) => {
//     switch (action.type) {
//         case HYDRATE:
//             // Attention! This will overwrite client state! Real apps should use proper reconciliation.
//             return action.payload;
//         case 'SETKEYWORD':
//             console.log(action.payload)
//             return { ...state, tick: action.payload };
//         default:
//             return state;
//     }
// };

// create a makeStore function
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
const makeStore = (context: Context) =>
    configureStore({
        reducer: reducer,
        devTools: true,
    });
// export an assembled wrapper
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });