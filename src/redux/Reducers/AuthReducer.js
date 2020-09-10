// import axios from "axios";

const initialState = { username: "", profile_pic: "", phone_number: "", email: "" };

const ADD_USER = "ADD_USER";

export const  addUser = (username, profile_pic, phone_number, email) => {


  return {
    type: ADD_USER,
    payload: {username, profile_pic, phone_number, email}
  };
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER: 
        const {username, profile_pic, phone_number, email} = payload
        return { ...state, username, profile_pic, phone_number, email };
     default:
      return state;
  }
}
