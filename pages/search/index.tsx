import StickySearch from '@/components/StickSearchSpan';
import Footer from '@/components/Footer';
import { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next';
interface PageProps {
    product: string | string[] | undefined;
}
export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
    const _props: PageProps = {
        product: context.query.product ? context.query.product : ''
    }
    return {
        props: _props,
    }
}
const SearchPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <StickySearch />
            <p>{props.product}</p>
            <Footer />
        </>
    )
}
export default SearchPage