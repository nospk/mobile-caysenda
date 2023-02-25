import type { FC } from "react";
import Image from 'next/image';
import iconMenu from '@/public/iconMenu.png'
import iconChoice from '@/public/iconChoice.png'
import iconSale from '@/public/iconSale.png'
import iconProductNews from '@/public/iconProductNews.png'
import iconProductHot from '@/public/iconProductHot.png'

const Menu: FC = () => {
    return (
        <>
            <div className="flex flex-row text-center pt-2 h-26 mx-2.5 text-[#606060]">
                <div className="flex-1 ">
                    <div className="flex items-center justify-center "><Image className="ml-auto mr-auto"
                        src={iconMenu}
                        alt="Home"
                        width={50}
                        height={50}
                    /></div>
                    <span>Danh Mục</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center "><Image className="ml-auto mr-auto"
                        src={iconSale}
                        alt="Sale"
                        width={50}
                        height={50}
                    /></div>
                    <span>Sale</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center "><Image className="ml-auto mr-auto"
                        src={iconProductNews}
                        alt="News"
                        width={50}
                        height={50}
                    /></div>
                    <span>SP Mới</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center "><Image className="ml-auto mr-auto"
                        src={iconProductHot}
                        alt="Hot"
                        width={50}
                        height={50}
                    /></div>
                    <span>SP Hot</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center "><Image className="ml-auto mr-auto"
                        src={iconChoice}
                        alt="Choice"
                        width={50}
                        height={50}
                    /></div>
                    <span>Phân Loại</span>
                </div>
            </div>
        </>
    )

}

export default Menu;