import { useDispatch } from "react-redux";
import {
  resetGetAllUsersError,
  resetGetAllUsersState,
  setAllUsers,
} from "../../../store/get-all-users/get-all-users.slice";

const useGetAllUsersActions = () => {
  const dispatch = useDispatch();

  const dispatchSetAllUsers = (updatedEntries) => {
    dispatch(setAllUsers(updatedEntries));
  };

  const dispatchResetGetAllUsersError = () => {
    dispatch(resetGetAllUsersError());
  };

  const dispatchResetGetAllUsersState = () => {
    dispatch(resetGetAllUsersState());
  };

  return {
    dispatchSetAllUsers,
    dispatchResetGetAllUsersError,
    dispatchResetGetAllUsersState,
  };
};

export default useGetAllUsersActions;
