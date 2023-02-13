import type { NextPage } from 'next'
import {useState} from 'react'
const SearchHistory: NextPage = () => {
    const [textInputs, setTextInputs] = useState(['Áo Nữ', 'Thời trang nam nữ', 'ốp điện thoại', 'Quần áo trẻ em'])
    return (
        <div className="flex flex-row space-x-1 text-xs flex-nowrap overflow-x-scroll scrollbar-hide h-8 items-center pt-1 mx-2.5">
            {textInputs.map(textInput => <span key={textInput} className="flex-none broder-0 rounded-3xl bg-gray-200 p-1">{textInput}</span>     
            )}
        </div>
    )
}

export default SearchHistory