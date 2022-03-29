import React, { Fragment, useEffect, useState } from "react";
import { DeleteIcon } from "./DeleteIcon";
import { UpdateRow } from "./UpdateRow";

export const UserRow = ({ user, deleteHandler, updateHandler }) => {
  const [isModified, setIsModified] = useState(false);
  const { id, name, status } = user || {};

  useEffect(() => {
    setIsModified(status === "changed");

    return () => {
      console.log(`user with name ${name} has been deleted`);
    };
  }, [status]);

  const handleUpdate = () => {
    updateHandler(id);
  };
  const handleDelete = () => {
    deleteHandler(id);
  };

  return (
    <div key={id}>
      {isModified && <span>User modified</span>}&nbsp;&nbsp;
      <span>
        {id} - {name}
      </span>
      &nbsp;&nbsp;
      <UpdateRow
        isModified={isModified}
        handleUpdate={handleUpdate}
      ></UpdateRow>
      &nbsp;
      <DeleteIcon handleDelete={handleDelete}></DeleteIcon>
    </div>
  );
};
