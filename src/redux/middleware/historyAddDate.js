import { HISTORY_CONTENT } from "../actionType/actionType";

const historyAddDate = (store) => (next) => (action) => {
  const currentDate = new Date().toUTCString();
  if (action.type === HISTORY_CONTENT) {
    const newAction = {
      ...action,
      payload: { ...action.payload, watchDate: currentDate },
    };
    return next(newAction);
  }
  return next(action);
};

export default historyAddDate;
