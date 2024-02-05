import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Publicroute from "./routes/Publicroute";
import Privateroute from "./routes/Privateroute";
import Addpaper from "./components/Addpaper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Publicroute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route
            path="*"
            element=<h1 className="fw-bold text-center"> 404 NOT FOUND </h1>
          />
        </Route>
        <Route element={<Privateroute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/editpaper/:id" element={<Edit />} />
          <Route path="/addpaper" element={<Addpaper />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
