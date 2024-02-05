import React, { useEffect, useState } from "react";
import { api } from "../utilities/api";
import { Navigate, Outlet } from "react-router-dom";

const Privateroute = () => {
  const [isloggedin, setisloggedin] = useState(null);
  useEffect(() => {
    const checkuser = async () => {
      try {
        const result = await api("get", "/isauthenticated");
        // console.log("private route reuslt", result);
        // console.log(result.success);
        if (result.success) setisloggedin(true);
        else setisloggedin(false);
      } catch (err) {
        console.log("error fetching in data", err.message);
      }
    };
    checkuser();
  }, []);
  if (isloggedin === null) return <div>loading..</div>;
  return isloggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroute;
