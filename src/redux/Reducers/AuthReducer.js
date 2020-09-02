const initialState = {
  user: { username: "", profile_pic: "" },
};

const ADD_USER = "ADD_USER";

export function addUser(userObj) {
  return {
    type: ADD_USER,
    payload: userObj,
  };
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
}
