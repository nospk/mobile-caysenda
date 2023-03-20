import SearchBar from '@/components/SearchBar';
import { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next';
import HistoryView from '@/screens/search/HistoryView';

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
const SearchVideo = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<>
			<SearchBar site="video"/>
			<div className="px-[2.4vw]">
				<HistoryView />
			</div>
		</>
	);
};
export default SearchVideo;
