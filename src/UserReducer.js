const INITIAL_STATE = {
  userList: [
    {
      id: 1,
      name: "Test 1",
    },
    {
      id: 2,
      name: "Test 2",
    },
    {
      id: 3,
      name: "Test 3",
    },
    {
      id: 4,
      name: "Test 4",
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, userList: [...state.userList, action.payload] };
    case "DELETE_USER":
      const newUserList = state.userList.filter((x) => x.id != action.payload);
      return { ...state, userList: newUserList };
    case "UPDATE_USER":
      const newList = state.userList.map((x) => {
        if (x.id === action.payload) {
          x.status = x.status && x.status === "changed" ? "reset" : "changed";
        }
        return x;
      });
      return { ...state, userList: newList };
    default:
      return state;
  }
};
