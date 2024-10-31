import { useDispatch } from "react-redux";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { confirmPasswordForDbManagementAccessAsync } from "../../../store/database-management/database-management-thunks";

const useConfirmPasswordForDbAccessThunk = () => {
  const { email } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const confirmPasswordForDbAccessThunk = (password) => {
    dispatch(confirmPasswordForDbManagementAccessAsync({ email, password }));
  };

  return { confirmPasswordForDbAccessThunk };
};

export default useConfirmPasswordForDbAccessThunk;
