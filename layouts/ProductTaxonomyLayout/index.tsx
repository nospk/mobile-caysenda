import type { ReactNode } from 'react';
import styles from './styles.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useRouter } from 'next/router';

const ProductTaxonomyLayout = ({ children, title }: { children: ReactNode; title: string }) => {
	const router = useRouter();
	return (
		<>
			<div className={styles.sticky_out_wrapper}>
				<div className={styles.sticky_wrapper}>
					<span className={styles.avatar}>
						<MdArrowBackIosNew
							size={30}
							className={styles.back}
							onClick={() => router.back()}
						/>
					</span>
					<span className={styles.title}>{title}</span>
					<AiOutlineSearch
						size={30}
						className={styles.icon}
						onClick={() => router.push(`/search`)}
					/>
				</div>
			</div>
			{children}
		</>
	);
};

export default ProductTaxonomyLayout;
