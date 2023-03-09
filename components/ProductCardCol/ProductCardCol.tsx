import type { FC } from 'react';
import Image from 'next/image';
import styles from './ProductCardCol.module.css';
import { numberToString } from '@/uitls/formatNumberPrice';
interface Product {
	name: string;
	price: number;
	sold: number;
	image: string;
}

const ProductCard: FC<Product> = (props) => {
	return (
		<div className={styles.product_card}>
			<div className={styles.image_product}>
				<Image
					className={styles.image_square}
					src={props.image}
					alt="Picture of the author"
					sizes="46.4vw,46.4vw"
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className={styles.info_product}>
				<span>{props.name}</span>
				<span className={styles.price_product}>{numberToString(props.price)}đ</span>
				<div className={styles.sold}>
					<span className="float-left">Đã bán:</span>
					<span className="float-right">{props.sold}</span>
				</div>
				<button className={styles.add_cart}>Thêm Giỏ Hàng</button>
			</div>
		</div>
	);
};

export default ProductCard;
