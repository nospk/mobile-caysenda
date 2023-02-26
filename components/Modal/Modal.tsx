import type { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {

    const closeModal = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay} onDrag={closeModal} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div>{children}</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;