import { useRouter } from "next/router";

export function authenticated(): boolean {
  try {
    getAuth();
  } catch {
    return false;
  }
  return true;
}
export function setAuth(auth: { refreshToken: string; accessToken: string }) {
  console.log(auth);
  localStorage.setItem("accessToken", auth.accessToken);
  localStorage.setItem("refreshToken", auth.refreshToken);
}
export async function refresh() {
  if (getAuth().refreshToken && process.env.NEXT_PUBLIC_AUTH_URL) {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_AUTH_URL + "/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: getAuth().refreshToken,
        }),
      });
      if (res.ok) {
        const resPayload = await res.json();
        console.log(resPayload);
        setAuth(resPayload);
      } else {
        const errBody = await res.json();
        alert(
          `${errBody.code}: ${errBody.details}.\n Timestamp: ${errBody.timestamp}`
        );
        useRouter().push("/auth/login");
      }
    } catch {
      alert("COULD NOT SEND REQUEST TO SERVER.");
    }
  }
}
export function getAuth(): { refreshToken: string; accessToken: string } {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && refreshToken) {
    return { accessToken, refreshToken };
  }
  alert("Please login.");
  throw new Error("NO TOKENS. PLEASE LOGIN");
}
// export function tryToSendAuthRequest(URL: string, data: RequestInit, headers: {}) {
//   try {
//     const res = fetch(URL, data);
//   } catch {
//     alert("COULD NOT SEND REQUEST TO SERVER");
//   }
// }
