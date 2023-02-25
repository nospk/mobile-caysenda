import Head from '@/components/Head';
import SearchHistory from '@/components/SearchHistory';
import StickySearch from '@/components/StickSearch';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Head title="Trang chủ - Cây Sen Đá" />
            {/* Search Top Sticky*/}
            <StickySearch />
            {/* History Search */}
            <SearchHistory />
            {/* Menu */}
            {children}
            {/* Menu Bottom Stick*/}
            <Footer />
        </>
    )
};


export default HomeLayout