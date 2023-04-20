import API from "@/uitls/api";

const login = async ({
  username,
  password,
}:{ username: string; password: string }) => {
  let user = await API.GET({
    path: "/authentication/login",
    data: { username, password },
    auth: false,
  });
  return user;
};
const checkToken= async ({token}:{token:string}) => {
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
