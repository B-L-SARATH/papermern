import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { api } from "../utilities/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Home() {
  const [paperlist, setpaperlist] = useState([]);
  const getpapers = async () => {
    const data = await api("get", "/getpapers");
    if (data) {
      setpaperlist(data);
      console.log(data);
    }
  };
  useEffect(() => {
    console.log("new user data called");
    getpapers();
  }, []);

  const deletepaper = async (id) => {
    const result = await api("delete", `/deletepaper/${id}`);
    if (result.success) {
      toast.success(result.message);
      getpapers();
    } else {
      toast.error(result.message);
    }
  };

  if (paperlist.length == 0) {
    return (
      <>
        <Navbar />
        <h3 className="fw-light text-grey">
          {" "}
          Hello user.... Add your papers...
        </h3>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">SNO</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Year</th>
              <th scope="col">Publisher</th>
              <th scope="col">More</th>
            </tr>
          </thead>
          <tbody>
            {paperlist.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td scope="row">{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.year}</td>
                  <td>{item.publisher}</td>
                  <td>
                    <Link
                      to={`/editpaper/${item._id}`}
                      className="btn btn-dark m-1"
                    >
                      {" "}
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => {
                        deletepaper(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
