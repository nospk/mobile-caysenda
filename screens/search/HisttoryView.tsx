import type { FC } from 'react';
import { VscTrash } from 'react-icons/vsc';
import SpanHistory from '@/components/SpanHistory';
import { useState } from 'react';

const HistoryView: FC = () => {
	const [textUserSearchs, settextUserSearchs] = useState([
		'Quần',
		'Áo',
		'Bàn Chải',
		'Kem',
		'Balo 1',
		'Balo 2',
		'Balo 3',
		'Balo Abc 1',
		'Balo Abc 2',
		'Balo Abc 3',
		'Balo Abc 4',
	]);
	const listUseSearch = textUserSearchs.map((textSearch) => (
		<SpanHistory key={textSearch} textInput={textSearch} />
	));
	return (
		<>
			<div className="py-3 flex flex-row justify-center">
				<span className="flex-1 text-lg font-semibold">Lịch Sử Tìm Kiếm</span>
				<VscTrash size={24} className="order-last" onClick={() => settextUserSearchs([])} />
			</div>
			<div className="flex flex-row flex-wrap gap-4">{listUseSearch}</div>
			<div className="py-3 flex flex-row justify-center">
				<span className="flex-1 text-lg font-semibold">Mọi Người Đang Tìm Kiếm</span>
			</div>
			<div className="flex flex-row flex-wrap gap-4">{listUseSearch}</div>
		</>
	);
};
export default HistoryView;
