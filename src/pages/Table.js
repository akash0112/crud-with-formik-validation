import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser, EditUser } from "../store/actions/actions";

const Table = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.usersData);
  const handleDelete = (id) => {
    dispatch(DeleteUser(id));
  };
  const handleEdit = (id) => {
    dispatch(EditUser(id));
  };
  return (
    <div className="mt-4">
      <table className=" table table-striped border ">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Profession</th>
            <th>City</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        {user &&
          user.length > 0 &&
          user.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.profession}</td>
                <td>{item.city}</td>
                <td>{item.contact}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <div
                      className="btn btn-primary"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </div>
                    <div
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
          <div className="text-center fs-2 fw-bold text-success">{user.length<=0 && 'There is no data'}</div>
    </div>
  );
};

export default Table;
