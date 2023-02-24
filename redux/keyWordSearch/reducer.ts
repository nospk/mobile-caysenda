import { createReducer, PayloadAction} from '@reduxjs/toolkit';
import { setKeyWordHome } from '@/redux/keyWordSearch/action'
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';


interface typeKeyWord {
    home: string[]
    slice: string[]
    search: string[]
}

const initialState: typeKeyWord = {
    home: [],
    slice: [],
    search: [],
}

export const keyWordSearch = createReducer(initialState, (builder) => {
    builder
        .addCase(HYDRATE, (state, action: AnyAction) => {
            return action.payload.keyWordSearch;
        })
        .addCase(setKeyWordHome, (state, action: PayloadAction<{keyword:string[]}>) => {
            state.home = action.payload.keyword
        })

})



