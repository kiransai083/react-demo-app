export const updateUser = (userId) => {
  return async (dispatch, getState) => {
    console.log(
      "🚀 ~ file: CreateBriefActions.js ~ line 3 ~ return ~ getState",
      getState()
    );
    dispatch({ type: "UPDATE_USER", payload: userId });
  };
};

export const addUser = (user) => {
  return async (dispatch, getState) => {
    dispatch({ type: "ADD_USER", payload: user });
  };
};
export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    dispatch({ type: "DELETE_USER", payload: userId });
  };
};
