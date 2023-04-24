import Footer from "@/components/Footer";
import type { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className="mb-14">{children}</section>
      <Footer />
    </>
  );
};

export default HomeLayout;
