import { FC } from 'react';
import Image from 'next/image';
import pictureTest from '@/public/test.webp';
interface product {
    name: string;
    price: number;
    sold: number;
    image: string;
}

const ProductCard: FC<product> = (props: product) => {
    return (
        <div className="flex flex-col pr-1 pl-1">
            <div className="relative w-100 h-80 rounded-lg">
                <Image className="rounded-t-lg"
                    src={pictureTest}
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="flex flex-col bg-white rounded-b-lg p-2">
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