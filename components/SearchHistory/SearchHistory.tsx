import { useState, FC } from 'react';

import styles from './SearchHistory.module.css';
import Link from 'next/link';
const SearchHistory: FC = () => {

    const [textInputs] = useState(['Áo Nữ', 'Thời trang nam nữ', 'ốp điện thoại', 'Quần áo trẻ em']);
    return (
        <div className={styles.search_history}>
            {textInputs.map(textInput =>
                <span key={textInput} className={styles.text_search}>
                    <Link href={`/search?keyword=${textInput}`} >
                        {textInput}
                    </Link>
                </span>
            )}
        </div>
    )
}

export default SearchHistory