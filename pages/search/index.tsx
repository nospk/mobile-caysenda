import SearchBar from '@/components/SearchBar';
import { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next';
import HistoryView from '@/screens/search/HisttoryView';
import ProductView from '@/screens/search/ProductView';
interface PageProps {
	product: string | string[] | undefined;
}
export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
	const _props: PageProps = {
		product: context.query.product ? context.query.product : '',
	};
	return {
		props: _props,
	};
};
const SearchPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<>
			<SearchBar />
			<div className="px-[2.4vw]">
				<HistoryView />
				<ProductView />
			</div>
		</>
	);
};
export default SearchPage;
