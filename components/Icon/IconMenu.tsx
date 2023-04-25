import Image from 'next/image';
import type { FC } from 'react';
import styles from './Icon.module.css';
import { useRouter } from 'next/router';
interface Props {
	className?: string;
	src: string;
	alt: string;
	toUrl: string;
}
const Icon: FC<Props> = (props) => {
	const router = useRouter();
	return (
		<div onClick={() =>router.push(props.toUrl)} className={props.className}>
			<Image
				src={props.src}
				alt={props.alt}
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: '100%', height: '100%' }}
			/>
		</div>
	);
};

export default Icon;
