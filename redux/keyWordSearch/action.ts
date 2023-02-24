import { createAction } from '@reduxjs/toolkit';



export const setKeyWordHome = createAction('setKeyWordHome', (keyword: string[]) => {
    return {
        payload: {
            keyword
        }
    }
})