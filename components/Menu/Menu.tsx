import { type FC, useState, useEffect } from "react";
import styles from './Menu.module.css';
import Icon from '@/components/Icon';
import CategoryModal from '@/components/CategoryModal';
const Menu: FC = () => {
    return (
        <>
            <div className={styles.menu}>
                <CategoryModal>
                    <div className={styles.menu_item} >
                        <div className={styles.menu_icon}>
                            <Icon src="/iconCategory.png" alt="category" width={50} height={50} />

                        </div>
                        <span>Danh Mục</span>
                    </div>
                </CategoryModal>
                <div className={styles.menu_item}>
                    <div className={styles.menu_icon}>
                        <Icon src="/iconSale.png" alt="sale" width={50} height={50} />
                    </div>
                    <span>Sale</span>
                </div>
                <div className={styles.menu_item}>
                    <div className={styles.menu_icon}>
                        <Icon src="/iconProductNews.png" alt="News" width={50} height={50} />
                    </div>
                    <span>SP Mới</span>
                </div>
                <div className={styles.menu_item}>
                    <div className={styles.menu_icon}>
                        <Icon src="/iconProductHot.png" alt="Hot" width={50} height={50} />
                    </div>
                    <span>SP Hot</span>
                </div>
                <div className={styles.menu_item}>
                    <div className={styles.menu_icon}>
                        <Icon src="/iconProductTaxonomy.png" alt="ProductTaxonomy" width={50} height={50} />
                    </div>
                    <span>Phân Loại</span>
                </div>
            </div>
        </>
    )

}

export default Menu;