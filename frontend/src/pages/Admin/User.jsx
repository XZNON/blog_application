import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function User() {
  const users = [
    { id: 1, name: "shivalik", email: "jdsldgj@123.com" },
    { id: 1, name: "shivalik", email: "jdsldgj@123.com" },
    { id: 1, name: "shivalik", email: "jdsldgj@123.com" },
  ];
  const handleDelete = () => {
    try {
      alert("user deleted successfully");
    } catch (error) {}
  };
  return (
    <>
      <div className="container">
        <h1 className="text-white mb-4">Users</h1>
        <div className="table-responsive">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, idx) => {
                return (
                  <tr scope="row">
                    <th>{idx + 1}</th>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>
                      <button className="btn btn-danger" onClick={handleDelete}>
                        <FaTrashAlt />
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
