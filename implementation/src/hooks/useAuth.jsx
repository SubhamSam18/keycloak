// import { useEffect, useState, useRef } from "react";
// import Keycloak from "keycloak-js";

// const useAuth = () => {
//   const [loginStatus, setLogin] = useState(false);
//   const Run = useRef(false);
//   const [token, setToken] = useState(null);
//   const [keycloak, setKeycloak] = useState(null);

//     const KC = new Keycloak({
//       url: import.meta.env.VITE_KEYCLOAK_URL,
//       realm: import.meta.env.VITE_KEYCLOAK_REALM,
//       clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID,
//     });

//   useEffect(() => {
//     if (Run.current) return;
//     Run.current = true;

//     KC.init({
//       onLoad: "login-required",
//       // onLoad:"check-sso",
//     }).then((authenticated) => {
//       setLogin(authenticated);
//       setToken(KC.token);
//     //   setKeycloak(KC.idToken);

//     //   KC.onTokenExpired = () => {
//     //     console.log("Token Expired");
//     //     KC.logout();
//     //   };
//     });

//     // return () => {
//     //   if (keycloak) {
//     //     keycloak.logout();
//     //   }
//     // };
//   }, []);

//   return { loginStatus, token, keycloak };
// };
// export default useAuth;


import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID,
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({
        onLoad: "login-required",
      })
      .then((res) => {
        setLogin(res);
        setToken(client.token);
      });
  }, []);
//   console.log(token)
  return {isLogin, token};
};

export default useAuth;