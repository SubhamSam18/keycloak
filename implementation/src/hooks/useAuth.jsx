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

    const storedToken = localStorage.getItem("keycloakToken");

    if (storedToken) {
      client.token = storedToken;
    }

    client
      .init({
        onLoad: "login-required",
        token: storedToken,
      })
      .then((res) => {
        setLogin(res);
        setToken(client.token);
        localStorage.setItem("keycloakToken", client.token);
      });
  }, []);

  return { isLogin, token };
};

export default useAuth;