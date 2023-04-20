import API from "@/uitls/api";

const login: FC<{ username: string; password: string }> = async ({
  username,
  password,
}) => {
  let user = await API.GET({
    path: "/authentication/login",
    data: { username, password },
    auth: false,
  });
  return user;
};
const checkToken: FC<string> = async (token) => {
  let check = await API.GET({
    path: "/authentication/check-token",
    data: token,
    auth: false,
  });
  return check;
};
const Auth = {
  login,
  checkToken,
};
export default Auth;
