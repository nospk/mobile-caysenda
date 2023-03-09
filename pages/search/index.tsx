import SearchBar from '@/components/SearchBar';
import { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next';
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
			<div className='mx-2.5 pt-2'>
				<SearchBar />
			</div>

			<p>{props.product}</p>
		</>
	);
};
export default SearchPage;
