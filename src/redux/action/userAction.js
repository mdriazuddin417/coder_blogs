import { LOGOUT, SIGNUP } from "../actionType/actionType";

export const userData = (user) => {
  return {
    type: SIGNUP,
    payload: user,
  };
};
export const userLogOut = () => {
  return {
    type: LOGOUT,
  };
};
