import type { FC } from 'react';
import Image from 'next/image';
import styles from './VideoCard.module.css';
import { numberToString } from '@/uitls/formatNumberPrice';
interface Product {
	name: string;
	detail: string;
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
				<span className={styles.detail}>{props.detail}</span>
			</div>
		</div>
	);
};

export default ProductCard;
