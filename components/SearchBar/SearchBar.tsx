import { FC, useState, useRef, useEffect } from 'react';
import { MdArrowBackIosNew, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './SearchBar.module.css';
import Link from 'next/link';
interface Props {
	site: string;
}
const SearchBar: FC<Props> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const handleOutsideClick = (event: any) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		const handleScroll = () => {
			setIsOpen(false);
		};
		document.addEventListener('mousedown', handleOutsideClick);
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			document.removeEventListener('scroll', handleScroll);
		};
	}, [dropdownRef]);
	return (
		<div className={styles.sticky_out_wrapper}>
			<div className={styles.bar_back}>
				<Link href="/">
					<MdArrowBackIosNew size={30} className={styles.icon_center} />
				</Link>
			</div>
			<div className={styles.sticky_wrapper}>
				<div className={styles.dropdown} ref={dropdownRef}>
					<button className={styles.search_select} onClick={() => setIsOpen(!isOpen)}>
						Tìm sản phẩm
						<MdOutlineKeyboardArrowDown />
					</button>
					{isOpen && (
						<div
							className={styles.dropdown_wapper}
							role="menu"
							aria-labelledby="dropdown-button"
							tabIndex={-1}
						>
							<div className={styles.dropdown_select} role="none">
								<div
									className={`${styles.dropdown_select_item} ${
										props.site === 'product' ? styles.active : ''
									}`}
									onClick={() => setIsOpen(false)}
								>
									<Link href="/search">
										<span>Tìm sản phẩm</span>
									</Link>
								</div>
								<div
									className={`${styles.dropdown_select_item} ${
										props.site === 'video' ? styles.active : ''
									}`}
									onClick={() => setIsOpen(false)}
								>
									<Link href="/search_video">
										<span>Tìm videos</span>
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
				<input className={styles.search_text} placeholder="Tìm Theo Tên Sản Phẩm ..." />
				<button className={styles.search_button}>Tìm Kiếm</button>
			</div>
		</div>
	);
};

export default SearchBar;
