import ProductCard from '@/components/ProductCard';
import Head from '@/components/Head';
import FlexLeftRightLayout from '@/layouts/FlexLeftRightLayout';
import SliderCard from '@/components/SliderCard';
import SearchCardCol from '@/components/SearchCard';
import type { NextPageWithLayout } from '@/pages/_app';
import ProductTaxonomyLayout from '@/layouts/ProductTaxonomyLayout';
import { ReactElement } from 'react';
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
const ProductSale: NextPageWithLayout<any> = (props) => {
	const slideBanners = [
		'https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500',
		'https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500',
	];
	const listslideBanner = slideBanners.map((slideBanner) => {
		return {
			src: slideBanner,
			alt: 'banner',
			link: '/product',
		};
	});
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
	listLeft.unshift(<SliderCard key={30} banner={listslideBanner} />);
	// prettier-ignore
	listRight.splice(3, 0,<SearchCardCol key={31} keywords={["Quần Áo", "Đồ trẻ em", "Túi xách", "Quần jean", "Áo Thun", "Túi xách hình con thỏ", "Tai nghe bluetooth", "Điện thoại Iphone"]}/>)
	return (
		<>
			<Head title="Sản phẩm Sale" description="Những sản phẩm Sale" />

			{/* Show Products */}
			<FlexLeftRightLayout>
				<div className="flex-1">{listLeft}</div>
				<div className="flex-1">{listRight}</div>
			</FlexLeftRightLayout>
		</>
	);
};

ProductSale.getLayout = function getLayout(page: ReactElement) {
	return <ProductTaxonomyLayout title="Sản Phẩm Sale">{page}</ProductTaxonomyLayout>;
};
export default ProductSale;
