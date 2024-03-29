import type { NextPageWithLayout } from "@/pages/_app";
import { type ReactElement, useState, Suspense, lazy } from "react";
import HomeLayout from "@/layouts/HomeLayout";

import Menu from "@/components/Menu";
import Head from "@/components/Head";
import { wrapper, AppState } from "@/redux/store";
import dynamic from "next/dynamic";
import StickSearch from "@/components/StickSearch";
import SpanHistory from "@/components/SpanHistory";
import styles from "./index.module.css";
import ProductView from "@/screens/home/Productview";
import ProductService from "@/services/Product.service";

//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// const ProductView = lazy(() => import('@/screens/home/Productview'));

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      let listProduct = await ProductService.getListProduct();
      const productsLefts = listProduct.slice(0, 10);
      const productsRights = listProduct.slice(10);
      const slideBanners = [
        "https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500",
        "https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500",
        "https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500",
      ];

      return {
        props: { slideBanners, productsLefts, productsRights },
      };
    }
);
const Home: NextPageWithLayout<any> = (props) => {
  // const ProductView = dynamic(() => import('@/screens/home/Productview'), {
  // 	loading: () => <p>Loading...</p>,
  // 	ssr: false,
  // });

  const textInputs = [
    "Áo Nữ",
    "Thời trang nam nữ",
    "ốp điện thoại",
    "Quần áo trẻ 1",
    "Quần áo trẻ 2",
    "Quần áo trẻ 3",
    "Quần áo trẻ 4",
  ];
  let listHistory = textInputs.map((textInput) => (
    <SpanHistory key={textInput} textInput={textInput} />
  ));
  return (
    <>
      <Head title="Trang chủ - Cây Sen Đá" description="test" />
      <StickSearch />
      <div className={styles.search_history}>{listHistory}</div>
      <Menu showCategory={true} />
      {/* Show Products */}
      <ProductView
        slideBanners={props.pageProps.slideBanners}
        productsLefts={props.pageProps.productsLefts}
        productsRights={props.pageProps.productsRights}
      />
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home;
