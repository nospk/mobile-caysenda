import { createSlice, createAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface KeyWordHome {
    keyWordHome: string[]
}
const initialState: KeyWordHome = {
    keyWordHome: []
}
const setKeyWordHome = createAction<string[]>('setkeywordhome')

const keyword = createSlice({
    name: 'keyWordSearchHome',
    initialState,
    reducers: {
        setKeyWordHome: (state, action) => action.payload,
    },

})

export default keyword;