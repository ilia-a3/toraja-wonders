export function authenticated(): boolean {
  return false;
}
let tokens: { refreshToken: string; accessToken: string } | null = null;
export function setAuth(auth: { refreshToken: string; accessToken: string }) {
  console.log(auth);
  tokens = auth;
}
export function getAuth() {
  return tokens;
}
