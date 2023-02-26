import { FC, ReactNode } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import Icon from "@/components/Icon";
interface Props {
    children: ReactNode;
}
const MenuModal: FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => { 
        setIsOpen(true);
        document.body.classList.add('overflow-hidden');
    };
    const handleCloseModal = () => {
        setIsOpen(false)
        document.body.classList.remove('overflow-hidden');
    };
    return (
        <>
            <div onClick={handleOpenModal}>{children}</div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <span className="font-bold">Danh Mục Sản Phẩm</span>
                <div className="grid grid-cols-5">
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                    <div>
                        <Icon src="/iconProductNews.png" alt="category" width={50} height={50} />
                        <span>Test Menu</span>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default MenuModal

