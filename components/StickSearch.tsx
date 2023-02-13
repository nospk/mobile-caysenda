import type { NextPage } from 'next'
import { BsSearch } from "react-icons/bs";
const StickySearch: NextPage = () => {
    return (
        <div className="sticky top-0 z-10 bg-gray-100">
            <div className=" border-2 mt-2 border-solid border-red-400 rounded-lg bg-white flex justify-center items-center h-11 max-w-full mx-2.5">
                <span className="flex-1 px-2 max-w-40px relative float-right"><BsSearch /></span>
                <span className="flex-1 px-2 relative w-full block whitespace-pre-wrap bg-white" >Tìm theo tên sản phẩm</span>
                <button className="flex-1 relative max-w-60px float-left text-red-600">Tìm</button>
            </div>
        </div>
    )
}

export default StickySearch