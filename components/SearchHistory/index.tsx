import { useState, FC } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchHistory.module.css';
const SearchHistory: FC = () => {
    const router = useRouter();
    const [textInputs] = useState(['Áo Nữ', 'Thời trang nam nữ', 'ốp điện thoại', 'Quần áo trẻ em']);
    return (
        <div className={styles.search_history}>
            {textInputs.map(textInput =>
                <span key={textInput} className={styles.text_search} onClick={() => router.push(`/search?keyword=${textInput}`)}>
                    {textInput}
                </span>
            )}
        </div>
    )
}

export default SearchHistory