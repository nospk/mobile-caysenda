import { createAction } from '@reduxjs/toolkit';



export const setKeyHome = createAction<string[] | undefined>('keyWordSearch/setKeyHome')