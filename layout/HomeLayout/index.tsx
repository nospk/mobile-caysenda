import SearchHistory from '@/components/SearchHistory';
import StickSearchSpan from '@/components/StickSearchSpan';
import Footer from '@/components/Footer';
import type { FC, ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {/* Search Top Sticky*/}
            <StickSearchSpan />
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