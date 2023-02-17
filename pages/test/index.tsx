import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { wrapper, AppStore } from '@/redux/store';

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(store.counter.setkeywordhome(['123','123']));
            return {
                props: {}
            }
        }
);

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const Page: NextPage = ({  }) => <div>{}</div>;

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect((state: AppStore) => state)(Page);