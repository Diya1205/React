import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../slice/userDetail";

const Delete = ({ userId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(userId));
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Delete;
