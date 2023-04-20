import ProductCard from "@/components/ProductCard";
import Head from "@/components/Head";
import FlexLeftRightLayout from "@/layouts/FlexLeftRightLayout";
import SearchCardCol from "@/components/SearchCard";
import { NextPage } from "next";
import SearchBar from "@/components/SearchBar";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
const ProductAvailability: NextPage = () => {
  let [select, setSelect] = useState<boolean>(true);
  const productsLefts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const productsRights = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const listLeft = productsLefts.map((productsLeft) => (
    <ProductCard
      key={productsLeft}
      name="Kẹo dẻo"
      price={100000}
      sold={300}
      image={`https://source.unsplash.com/random/300x300?sig=${
        Math.random() * 100
      }`}
    />
  ));
  const listRight = productsRights.map((productsRight) => (
    <ProductCard
      key={productsRight}
      name="Kẹo dẻo"
      price={100000}
      sold={300}
      image={`https://source.unsplash.com/random/300x300?sig=${
        Math.random() * 100
      }`}
    />
  ));
  console.log(select);
  useEffect(() => {}, [select]);

  return (
    <>
      <Head title="Sản phẩm Hot" description="Những sản phẩm hot" />
      <SearchBar site="product" showType={false} />
      <div className={styles.text_box}>
        <span
          className={select ? styles.active : ""}
          onClick={() => {
            setSelect(true);
          }}
        >
          Có Sẵn
        </span>
        <span
          className={select ? "" : styles.active}
          onClick={() => {
            setSelect(false);
          }}
        >
          Order
        </span>
      </div>
      {/* Show Products */}
      <FlexLeftRightLayout>
        <div className="flex-1">{listLeft}</div>
        <div className="flex-1">{listRight}</div>
      </FlexLeftRightLayout>
    </>
  );
};

export default ProductAvailability;
