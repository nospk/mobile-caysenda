import { useState, FC } from 'react';
import { useRouter } from 'next/router';
const SearchHistory: FC = () => {
    const router = useRouter();
    const [textInputs] = useState(['Áo Nữ', 'Thời trang nam nữ', 'ốp điện thoại', 'Quần áo trẻ em']);
    return (
        <div className="flex flex-row space-x-1 text-xs flex-nowrap overflow-x-scroll scrollbar-hide h-8 items-center mx-2.5">
            {textInputs.map(textInput =>
                <span key={textInput} className="flex-none broder-0 rounded-3xl bg-[#f2f2f2] p-1 text-[#606060] " onClick={() => router.push(`/search?product=${textInput}`)}>
                    {textInput}
                </span>
            )}
        </div>
    )
}

export default SearchHistory