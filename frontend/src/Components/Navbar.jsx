import BaseComponent from "bootstrap/js/dist/base-component";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BaseURL } from "../services/Endpoint";
import { RemoveUser } from "../redux/AuthSlice";
import toast from "react-hot-toast";

export default function Navbar() {
  const [islogin, setIslogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log("user", user);

  const handleLogout = async () => {
    try {
      const request = await post("/auth/logout");
      const response = request.data;
      if (request.status == 200) {
        navigate("/login");
        dispatch(RemoveUser());
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="navbar d-flex justify-content-between align-items-center p-3">
        {/* go to home page  */}
        <Link to={"/"}>
          <h1 className="mx-5 text-white fs-2 fw-bold">BlogPost</h1>
        </Link>
        {/* login button  */}
        <div className="d-flix align-items-center">
          {/* check if the user is logged in  */}
          {!user ? (
            <Link to={"/login"}>
              <button className="btn_sign mx-3">Sign in</button>
            </Link>
          ) : (
            // if logged in show the dropdown
            <div className="dropdown">
              <div
                className="avatar-container pointer rounded-circle overflow-hidden bg-info"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              >
                <img
                  src={`${BaseURL}/temp/${user.profile}`}
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                {/* if the use has admin controls show him the dashboard  */}
                {user && user.role == "admin" ? (
                  <li>
                    <Link className="dropdown-item" to={"/dashboard"}>
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <Link className="dropdown-item" to={`/profile/${user._id}`}>
                    Profile
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  >
                    Signout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
