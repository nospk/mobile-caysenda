import { FC, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import styles from './SearchBar.module.css';
import Link from 'next/link';


const SearchBar: FC = () => {
	return (
		<div className={styles.sticky_out_wrapper}>
			<div className={styles.bar_back}>
				<Link href="/">
					<MdArrowBackIosNew size={30} className="ml-auto mr-auto" />
				</Link>
			</div>

			<div className={styles.sticky_wrapper}>
				<span className={styles.search_select}>Tìm sản phẩm</span>
				<input className={styles.search_text} placeholder="Tìm Theo Tên Sản Phẩm ..." />
				<button className={styles.search_button}>Tìm Kiếm</button>
			</div>
		</div>
	);
};

export default SearchBar;
