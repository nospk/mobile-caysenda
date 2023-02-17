import type { FC } from 'react';
import Image from 'next/image';
import pictureTest from '@/public/test.webp';
interface Product {
    name: string;
    price: number;
    sold: number;
    image: string;
}

const ProductCard: FC<Product> = (props) => {
    return (
        <div className="flex flex-col pr-1 pl-1">
            <div className="relative rounded-lg w-46vw h-46vw ">
                <Image className="rounded-t-lg w-46vw h-46vw aspect-square"
                    src={pictureTest}
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="flex flex-col bg-white rounded-b-lg p-2 w-46vw">
                <span className="text-lg">{props.name}</span>
                <span className="text-red-700 text-2xl font-bold">{props.price}đ</span>
                <div className="pt-2">
                    <span className="text-gay-400 float-left">Đã bán:</span>
                    <span className="text-gay-400 float-right">{props.sold}</span>
                </div>
                <button className="border-2 h-8 rounded-lg text-[#f66d09] border-orange-200">Thêm Giỏ Hàng</button>
            </div>
        </div>
    )
}

export default ProductCard