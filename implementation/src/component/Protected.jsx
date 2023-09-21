import React from "react";
import { Form } from "@formio/react";
import useAuth from "../hooks/useAuth";
const Protected = ({ token }) => {
  // const {  token} = useAuth();

  // console.log(token);
  return (
    <div>
      <Form
        src="http://10.9.2.33/ytqdinbrqeygnaj/testingform1"
        submission={{ data: { token } }}
      />
      ;
      {/* <Form src="http://10.9.2.33/ytqdinbrqeygnaj/policy" submission={{data:{token}}}/>; */}
    </div>
  );
};

export default Protected;
