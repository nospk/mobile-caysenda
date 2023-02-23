import { createReducer } from '@reduxjs/toolkit';
import { setKeyHome } from '@/redux/keyWordSearch/action'
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
type keyWordHome = String[] | undefined

const initialState = [] as keyWordHome

export const keyWordSearch = createReducer(initialState, (builder) => {
    builder
        .addCase(HYDRATE, (state, action: AnyAction) => {
            return state = action.payload;
        })
        .addCase(setKeyHome, (state, action) => {
            return state = action.payload
        })

})
