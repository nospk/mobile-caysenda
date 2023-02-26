import Head from 'next/head';
import type { FC } from 'react';
interface Header {
    title: string;
    description: string;
}
const Header: FC<Header> = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="logo" href="/favicon.ico" />
            </Head>
        </>

    )

}
export default Header