import API from '@/uitls/api';
import type { Product } from '@/types/product';
const env = process.env.NODE_ENV;
console.log(env)
let link: string = '';
if (env == 'development') {
	link = 'http://localhost:3000/api/product';
} else if (env == 'production') {
	link = 'https://test.caysenda.vn/api/product';
}
const getListProduct = async () => {
	let products: Product[] = await API.GETOTHER({
		path: link,
	});
	return products;
};
const ProductService = {
	getListProduct,
};
export default ProductService;
