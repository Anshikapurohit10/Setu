
// import React, { createContext, useState, useEffect } from "react";
// import API from "../api";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("tresetu_token"));

//   useEffect(() => {
//     if (token) {
//       // Optionally fetch user profile or rely on token contents
//       localStorage.setItem("tresetu_token", token);
//       // recommend backend /profile/me exists; otherwise decode token on client
//       (async () => {
//         try {
//           const resp = await API.get("/profile/me");
//           if (resp.data?.profile) {
//             const u = { ...resp.data.profile.user, profile: resp.data.profile };
//             setUser(u);
//           } else {
//             setUser(null);
//           }
//         } catch (err) {
//           // token might be invalid
//           console.warn("fetch profile failed", err);
//           setUser(null);
//         }
//       })();
//     } else {
//       localStorage.removeItem("tresetu_token");
//       setUser(null);
//     }
//   }, [token]);

//   const login = (tok) => setToken(tok);
//   const logout = () => { setToken(null); localStorage.removeItem("tresetu_token"); setUser(null); };

//   return <AuthContext.Provider value={{ user, setUser, token, login, logout }}>{children}</AuthContext.Provider>;
// }
