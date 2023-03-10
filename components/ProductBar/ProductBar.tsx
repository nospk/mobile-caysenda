import { FC } from 'react';
import Image from 'next/image';
import styles from './ProductBar.module.css';
import Link from 'next/link';
interface Product {
	name: string;
	sold: number;
	image: string;
	link: string;
}
const ACHIEVEMENT = {
    1: 'bg-red-500',
    2: 'bg-orange-400',
    3: 'bg-yellow-400',
    4: 'bg-gray-400'
}

const ProductBar: FC<Product> = (product) => {
	return (
		<Link href={product.link}>
			<div className="flex flex-row">
				<span className="absolute z-10 text-white bg-red-500 p-1 rounded-full">1</span>
				<div className="relative h-[15vw] w-[15vw]">
					<Image
						className="rounded-lg"
						src={product.image}
						alt="Product Hot 1"
						sizes="31vw,31vw"
						fill
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className="grow p-2 space-y-1.5">
					<p> {product.name}</p>
					<p className="text-gray-400"> {product.sold}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductBar;
