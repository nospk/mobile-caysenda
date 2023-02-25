import HeadPage from '@/components/HeadPage';
import SearchHistory from '@/components/SearchHistory';
import StickySearch from '@/components/StickSearch';
import FooterMenu from '@/components/FooterMenu';
import type { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <HeadPage title="Trang chủ - Cây Sen Đá" />
            {/* Search Top Sticky*/}
            <StickySearch product="" />
            {/* History Search */}
            <SearchHistory />
            {/* Menu */}
            {children}
            {/* Menu Bottom Stick*/}
            <FooterMenu />
        </>
    )
};


export default HomeLayout