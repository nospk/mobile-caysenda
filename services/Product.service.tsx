import API from "@/uitls/api";
import type { Product } from "@/types/product";
const getListProduct = async () => {
  let products: Product[] = await API.GETOTHER({
    path: "https://bu3neg-3000.csb.app/api/product",
  });
  return products;
};
const Product = {
  getListProduct,
};
export default Product;
