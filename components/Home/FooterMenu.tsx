import type { FC } from "react";
import Image from 'next/image'
import Link from "next/link";
import iconHome from '@/public/iconHome.png'
import iconPerson from '@/public/iconPerson.png'
import iconVideos from '@/public/iconVideos.png'
import iconCart from '@/public/iconCart.png'
import iconChat from '@/public/iconChat.png'

const FooterMenu: FC = () => {
    return (
        <>
            <div className="h-20"></div>
            <div className="fixed flex flex-row bottom-0 left-0 z-10 space-x-1 text-center justify-center text-[#2a201e] bg-white bg-opacity-96 min-w-full px-2 pt-2 h-13 text-sm">
                <div className="w-1/4">
                    <Link href="/">
                        <Image className="ml-auto mr-auto"
                            src={iconHome}
                            alt="Home"
                            width={40}
                            height={40}
                        />
                    </Link>
                </div>
                <div className="w-1/4">
                    <Link href="/videos">
                        <Image className="ml-auto mr-auto"
                            src={iconVideos}
                            alt="Camera"
                            width={25}
                            height={25}
                        />
                        <span>Videos SP</span>
                    </Link>
                </div>
                <div className="w-1/4">
                    <Link href="/chats">
                        <Image className="ml-auto mr-auto"
                            src={iconChat}
                            alt="Message"
                            width={25}
                            height={25}
                        />
                        <span>Nhắn Tin</span>
                    </Link>
                </div>
                <div className="w-1/4">
                    <Link href="/carts">
                        <Image className="ml-auto mr-auto"
                            src={iconCart}
                            alt="Cart"
                            width={25}
                            height={25}
                        />
                        <span>Giỏ Hàng</span>
                    </Link>
                </div>
                <div className="w-1/4">
                    <Link href="/accounts">
                        <Image className="ml-auto mr-auto"
                            src={iconPerson}
                            alt="Account"
                            width={25}
                            height={25}
                        />
                        <span>Cá Nhân</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default FooterMenu