import styles from './SpanHistory.module.css';
import Link from 'next/link';
import type { FC } from 'react';
interface Span {
	textInput: string;
}
const SpanHistory: FC<Span> = (props) => {
	console.log('1');
	return (
		<div>
			<span className={styles.text_search}>
				<Link href={`/search?keyword=${props.textInput}`}>{props.textInput}</Link>
			</span>
		</div>
	);
};

export default SpanHistory;
