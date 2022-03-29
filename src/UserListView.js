import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { UserRow } from "./UserRow";
import * as actions from "./UserActions";

const UserListView = (props) => {
  console.log(
    "🚀 ~ file: UserListView.js ~ line 25 ~ UserListView ~ props",
    props
  );

  const { userList, addUser, deleteUser, updateUser } = props;

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleUpdate = (id) => {
    updateUser(id);
  };

  const addUserHandler = () => {
    addUser({
      id: Math.floor(Math.random() * 1000 + 1),
      name: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5),
    });
  };

  return (
    <>
      <button onClick={addUserHandler}>Add User</button>
      {userList.map((user) => (
        <UserRow
          key={user.id}
          user={user}
          deleteHandler={handleDelete}
          updateHandler={handleUpdate}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state:::", state);
  const { userList } = state.user;
  return { userList };
};

export default connect(mapStateToProps, actions)(UserListView);
