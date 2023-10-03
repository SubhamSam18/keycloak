import React, { useState, useEffect } from "react";
import { Form } from "@formio/react";
import "../css/protected.css";

const Protected = ({ token }) => {
  const [formSrc, setFormSrc] = useState("");
  const [formKey, setFormKey] = useState(0);

  const showForm = (src) => {
    setFormSrc(src);
    setFormKey((key) => key + 1);
    // console.log("FormKey :" + formKey);
  };

  return (
    <div>
      <ul>
        <li>
          <button
            className="btn-1"
            onClick={() =>
              showForm("http://10.9.2.33/ytqdinbrqeygnaj/newpolicypersonalcar")
            }
          >
            Save Policy
          </button>
        </li>
        <li>
          <button
            className="btn-1"
            onClick={() =>
              showForm("http://10.9.2.33/ytqdinbrqeygnaj/searchpolicy")
            }
          >
            Search Policy
          </button>
        </li>
      </ul>

      {formSrc && (
        <div>
          <Form key={formKey} src={formSrc} submission={{ data: { token } }} />
        </div>
      )}
    </div>
  );
};

export default Protected;
