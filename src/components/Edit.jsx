import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utilities/authorization";
import { toast } from "react-toastify";
import { api } from "../utilities/api";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [paperdata, setpaperdata] = useState({
    email: getLocalStorage("email"),
    title: "",
    author: "",
    year: "",
    publisher: "",
  });
  const getpaperdata = async () => {
    const result = await api("get", `/getpaper/${id}`);
    setpaperdata(result);
    console.log(result);
  };

  useEffect(() => {
    getpaperdata();
  }, []);

  const handlechange = (e) => {
    setpaperdata({ ...paperdata, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const result = await api("put", `/updatepaper/${id}`, paperdata);
    if (result.success) {
      toast.success(result.message);
      setpaperdata({
        email: getLocalStorage("email"),
        title: "",
        author: "",
        year: "",
        publisher: "",
      });
      navigate("/home");
    } else {
      toast.error(result.message);
    }
  };
  return (
    <>
      <Navbar />

      <div className="container border shadow p-3 my-3">
        <form action="" onSubmit={handlesubmit}>
          <label htmlFor="" className="m-2 fw-bold">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            name="title"
            value={paperdata.title}
            onChange={handlechange}
          />
          <label htmlFor="" className="m-2 fw-bold">
            Author
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Author"
            name="author"
            value={paperdata.author}
            onChange={handlechange}
          />
          <label htmlFor="" className="m-2 fw-bold">
            Year
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Year"
            name="year"
            value={paperdata.year}
            onChange={handlechange}
          />
          <label htmlFor="" className="m-2 fw-bold">
            Publisher
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Publisher"
            name="publisher"
            value={paperdata.publisher}
            onChange={handlechange}
          />

          <button type="submit" className="btn btn-dark m-2">
            Edit paper
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
