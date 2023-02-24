import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { wrapper, AppState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setKeyWordHome } from '@/redux/keyWordSearch/action'
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(setKeyWordHome(['dawdaw', 'awd']));
            return {
                props: {}
            }
        }
);

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const Page: NextPage = ({ }) => {
    const dispatch = useAppDispatch()
    const keywords = useAppSelector((state: AppState) => state.keyWordSearch.home)
    useEffect(() => {
        dispatch(setKeyWordHome(['321']))
    }, [dispatch])
    return (
        <div>{keywords[0]}</div>
    )

};
export default Page