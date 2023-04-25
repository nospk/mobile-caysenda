import type { FC } from 'react';
import Link from 'next/link';
import { IconMenu } from '@/components/Icon';
import styles from './Footer.module.css';

const Footer: FC = () => {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.tab_item}>
					<IconMenu
						src="/iconHome.png"
						alt="Home"
						className={styles.img_home}
						toUrl="/"
					/>
				</div>
				<div className={styles.tab_item}>
					<IconMenu
						src="/iconVideos.png"
						alt="Camera"
						className={styles.img_menu}
						toUrl="/video"
					/>
					<span className={styles.text_menu}>Videos SP</span>
				</div>
				<div className={styles.tab_item}>
					<IconMenu
						src="/iconChat.png"
						alt="Message"
						className={styles.img_menu}
						toUrl="/chat"
					/>
					<span className={styles.text_menu}>Nhắn Tin</span>
				</div>
				<div className={styles.tab_item}>
					<IconMenu
						src="/iconCart.png"
						alt="Cart"
						className={styles.img_menu}
						toUrl="/cart"
					/>
					<span className={styles.text_menu}>Giỏ Hàng</span>
				</div>
				<div className={styles.tab_item}>
					<IconMenu
						src="/iconPerson.png"
						alt="Account"
						className={styles.img_menu}
						toUrl="/account"
					/>
					<span className={styles.text_menu}>Cá Nhân</span>
				</div>
			</div>
		</>
	);
};
export default Footer;
