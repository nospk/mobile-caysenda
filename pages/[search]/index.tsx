import StickySearch from '@/components/Home/StickSearch';
import HeadPage from '@/components/HeadPage';
import FooterMenu from '@/components/Home/FooterMenu';
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
            <StickySearch product={props.product} />
            <HeadPage title='Tìm kiếm' />
            <p>{props.product}</p>
            <FooterMenu />
        </>
    )
}
export default SearchPage