import http from "./httpService";

const url = "http://103.127.29.85:8085/plotlist/login";
const auth = "http://103.127.29.85:8085/plotlist/getAuthToken";
//const tokenKey = "token";

http.setJwt(getJwt());
export async function login(email, password) {
  const { data: jwt } = await http.post(url, { email, password });
  console.log(jwt);
  localStorage.setItem("token", JSON.stringify(jwt.token));
  const { data: authToken } = await http.get(auth);
  console.log(authToken);
  localStorage.setItem("authToken", JSON.stringify(authToken.authToken));
}


export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("authToken");
}

export function getJwt() {
  return localStorage.getItem("token");
}
export default {
  login,
  logout,
  getJwt,
};
