import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			{children}

			<Footer />
		</>
	);
};

export default HomeLayout;
