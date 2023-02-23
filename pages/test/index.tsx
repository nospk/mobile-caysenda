import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { wrapper, AppState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setKeyHome } from '@/redux/keyWordSearch/action'
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(setKeyHome(['dawdaw']));
            return {
                props: {}
            }
        }
);

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const Page: NextPage<AppState> = ({keywords}) => <div>{keywords.keywords[0]}</div>;

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect((state: AppState) => state)(Page);