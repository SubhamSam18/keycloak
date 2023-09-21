import React, { useEffect, useRef } from "react";
import Protected from "./component/Protected";
import Public from "./component/Public";
import useAuth from "./hooks/useAuth";
// import Keycloak from 'keycloak-js';

const App = () => {
  const { isLogin, token } = useAuth();
  // const Run = useRef(false);

  // return(<Public/>);
  console.log("Login :" + isLogin);
  console.log(token)
  return isLogin ? <Protected token={token} /> : <Public />;
};

export default App;
