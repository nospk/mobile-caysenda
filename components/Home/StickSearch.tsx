import { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { BsSearch } from "react-icons/bs";
interface inputText {
    product: any;
}

const StickySearch: FC<inputText> = (props) => {
    const router = useRouter()
    const [keyWord, setKeyword] = useState(props.product ? props.product : '')
    const inputChangedHandler = (key: string) => {
        setKeyword(key)
    }

    return (
        <div className="sticky top-0 z-10 bg-[#f8f8f8]">
            <div className="h-2"></div>
            <div className=" border-2 border-solid border-[#ed471f] rounded-lg bg-white flex justify-center items-center h-11 max-w-full mx-2.5">
                <span className="flex-1 px-2 max-w-40px relative float-right"><BsSearch className="ml-auto mr-auto" /></span>
                <input
                    className="flex-1 px-2 relative w-full focus:outline-none whitespace-pre-wrap bg-white text-[#606060]"
                    value={keyWord}
                    placeholder='Tìm Theo Tên Sản Phẩm ...'
                    onChange={(e) => inputChangedHandler(e.target.value)}
                />

                <button className="flex-1 text-b relative max-w-60px float-left text-[#ed471f] " onClick={() => router.push(`/search?product=${keyWord}`)}>Tìm</button>
            </div>
            <div className="h-1"></div>
        </div>
    )
}

export default StickySearch