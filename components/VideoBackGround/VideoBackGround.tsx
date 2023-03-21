import { FC, ReactNode,  } from 'react';
import { useState, forwardRef } from 'react';
import Modal from '@/components/Modal';
import { IconCricle } from '@/components/Icon';
import styles from './VideoModal.module.css';

const MenuModal: FC = ({}) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpenModal = () => {
		setIsOpen(true);
	};
	const handleCloseModal = () => {
		setIsOpen(false);
	};
	return (
		<>
			<Modal
				isOpen={isOpen}
				styleModal={styles.modal}
				styleModalOverlay={styles.modalOverlay}
				onClose={handleCloseModal}
			>
				<video></video>
			</Modal>
		</>
	);
};
export default MenuModal;
