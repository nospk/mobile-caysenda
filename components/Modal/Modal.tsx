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
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalContent}>{children}</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;