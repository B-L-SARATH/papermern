import React from "react";
import { useState } from "react";
import { api, instance } from "../utilities/api";
import { getLocalStorage, saveLocalStorage } from "../utilities/authorization";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("form submited");
    const data = { email, password };
    const result = await api("post", "/login", data);
    console.log(result);

    if (result.success) {
      saveLocalStorage("token", result.token);
      saveLocalStorage("email", result.email);
      console.log("login success");
      toast.success(result.message);

      instance.defaults.headers.Authorization = getLocalStorage("token");
      navigate("/home");
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div className="container p-3">
      <h2 className="fw-bold my-5">SignIn Here</h2>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="email"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <br />
        <input
          className="form-control"
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <br />

        <div className="d-flex gap-3">
          <button type="submit" className="btn btn-dark ">
            Login
          </button>

          <Link to="/" className="btn btn-dark">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
