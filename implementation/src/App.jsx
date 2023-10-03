import React, { useEffect, useRef } from "react";
import Protected from "./component/Protected";
import Public from "./component/Public";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { isLogin, token } = useAuth();

  return isLogin ? <Protected token={token} /> : <Public /> ;
};

export default App;
