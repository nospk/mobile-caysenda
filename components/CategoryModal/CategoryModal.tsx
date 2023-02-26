import type { FC } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
const MenuModal: FC = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);
    return (
        <>
            <button onClick={handleOpenModal}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <h2>Modal Content</h2>
                <p>This is the modal content.</p>

                <button onClick={handleCloseModal}>Close Modal</button>
            </Modal>
        </>
    )
}
export default MenuModal


