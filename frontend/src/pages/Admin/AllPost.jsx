import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

export default function AllPost() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mb-4 text-white"> All posts</h1>
        <div className="row">
          <div className="col-md-4 mb-4 col-lg-4 col-12">
            <div className="card h-100">
              <img
                src="https://img.freepik.com/free-vector/think-outside-box-concept-illustration_114360-22363.jpg?t=st=1745834067~exp=1745837667~hmac=b2d1fa9d3a70842fed5cc6e0e95a4c4f697fe03f955b9517936120b7cbccde1b&w=740"
                className="card-img-top"
                alt="something"
              />
              <div className="card-body">
                <h5 className="card-title">this is my blog</h5>
                <p className="card-text">slajfaeljfdsklj</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-danger">
                  <FaTrashAlt />
                  Delete
                </button>
                <button className="btn btn-warning">
                  <FaEdit />
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
