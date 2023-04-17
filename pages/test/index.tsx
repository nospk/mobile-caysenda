import React, { useEffect } from "react";
import { NextPage } from "next";
import { wrapper, AppState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setKeyWordHome } from "@/redux/keyWordSearch/action";
import Auth from "@/services/Authentication.service";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      store.dispatch(setKeyWordHome(["dawdaw", "awd"]));
      return {
        props: {},
      };
    }
);

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const Page: NextPage = ({}) => {
  const dispatch = useAppDispatch();
  const keywords = useAppSelector(
    (state: AppState) => state.keyWordSearch.home
  );
  const login = async () => {
    let auth = await Auth.login({
      username: "nospk1706@gmail.com",
      password: "123",
    });
    console.log(auth.token);
    dispatch(setKeyWordHome(["auth"]));
    let checkToken = await Auth.checkToken({
      token: auth.token,
    });
    console.log(checkToken);
  };

  useEffect(() => {
    dispatch(setKeyWordHome(["321"]));
  }, [dispatch]);
  return (
    <>
      <span>{keywords[0]}</span>
      <button onClick={login}> Login </button>
    </>
  );
};
export default Page;
