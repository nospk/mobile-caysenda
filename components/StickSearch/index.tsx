import type { FC } from 'react';
import { useRouter } from 'next/router';
import { BsSearch } from "react-icons/bs";

import styles from './StickSearch.module.css'

const StickySearch: FC = () => {
    const router = useRouter()
    return (
        <div className={styles.sticky_out_wrapper}>
            <div className="h-2"></div>
            <div className={styles.sticky_wrapper}>
                <span className={styles.search_icon}><BsSearch className="ml-auto mr-auto" /></span>
                <span className={styles.search_text} onClick={() => router.push(`/search`)}>Tìm Theo Tên Sản Phẩm ...</span>
                <button className={styles.search_button} onClick={() => router.push(`/search`)}>Tìm</button>
            </div>
            <div className="h-1"></div>
        </div>
    )
}

export default StickySearch