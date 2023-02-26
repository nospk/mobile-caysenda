import SearchHistory from '@/components/SearchHistory';
import StickySearch from '@/components/StickSearch';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
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