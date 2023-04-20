import ProductCard from '@/components/ProductCard';
import Head from '@/components/Head';
import FlexLeftRightLayout from '@/layouts/FlexLeftRightLayout';
import SearchCardCol from '@/components/SearchCard';
import { NextPage } from 'next';
import SearchBar from '@/components/SearchBar';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import ProductService from '@/services/Product.service';
import { wrapper, AppState } from '@/redux/store';
import type { Product } from '@/types/product';
export const getServerSideProps = wrapper.getServerSideProps(
	(store) =>
		async ({ req, res, ...etc }) => {
			let listProduct = await ProductService.getListProduct();
			const productsLefts = listProduct.slice(0, 10);
			const productsRights = listProduct.slice(10);


			return {
				props: { productsLefts, productsRights },
			};
		}
);
const ProductAvailability: NextPage<any>=  (props) => {
	let [select, setSelect] = useState<boolean>(true);


	const listLeft = props.pageProps.productsLefts.map((product:Product) => (
		<ProductCard
			key={product.name}
			name={product.name}
			price={product.price}
			sold={product.sold}
			image={product.image}
			unit={product.unit}
			data={product.data}
			link={product.link}
		/>
	));
	const listRight = props.pageProps.productsRights.map((product:Product) => (
		<ProductCard
			key={product.name}
			name={product.name}
			price={product.price}
			sold={product.sold}
			image={product.image}
			unit={product.unit}
			data={product.data}
			link={product.link}
		/>
	));
	
	useEffect(() => {}, [select]);

	return (
		<>
			<Head title="Sản phẩm Hot" description="Những sản phẩm hot" />
			<SearchBar site="product" showType={false} />
			<div className={styles.text_box}>
				<span
					className={select ? styles.active : ''}
					onClick={() => {
						setSelect(true);
					}}
				>
					Có Sẵn
				</span>
				<span
					className={select ? '' : styles.active}
					onClick={() => {
						setSelect(false);
					}}
				>
					Order
				</span>
			</div>
			{/* Show Products */}
			<FlexLeftRightLayout>
				<div className="flex-1">{listLeft}</div>
				<div className="flex-1">{listRight}</div>
			</FlexLeftRightLayout>
		</>
	);
};

export default ProductAvailability;
