import HeadPage from '@/components/HeadPage';
import SearchHistory from '@/components/Home/SearchHistory';
import StickySearch from '@/components/Home/StickSearch';
import FooterMenu from '@/components/Home/FooterMenu';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const HomeLayout = ({ children }: Props) => {
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