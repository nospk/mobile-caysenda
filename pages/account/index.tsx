import HomeLayout from "@/layouts/HomeLayout";
import { type ReactElement } from "react";
import type { NextPageWithLayout } from "@/pages/_app";
const Account: NextPageWithLayout = () => {
  return <>hello 3213211</>;
};
Account.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Account;
