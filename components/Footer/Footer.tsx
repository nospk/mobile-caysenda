import type { FC } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import styles from "./Footer.module.css";
const Footer: FC = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="w-1/4">
          <Link href="/">
            <Icon src="/iconHome.png" alt="Home" width={40} height={40} />
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/video">
            <Icon src="/iconVideos.png" alt="Camera" width={25} height={25} />
            <span>Videos SP</span>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/chat">
            <Icon src="/iconChat.png" alt="Message" width={25} height={25} />
            <span>Nhắn Tin</span>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/cart">
            <Icon src="/iconCart.png" alt="Cart" width={25} height={25} />
            <span>Giỏ Hàng</span>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/account">
            <Icon src="/iconPerson.png" alt="Account" width={25} height={25} />
            <span>Cá Nhân</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Footer;
