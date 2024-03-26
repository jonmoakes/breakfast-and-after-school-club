import { useSelector } from "react-redux";
import { selectGetAllUsersSelectors } from "../../store/get-all-users/get-all-users.slice";

const useGetAllUsersSelectors = () => {
  const { getAllUsersIsLoading, allUsers, getAllUsersError } = useSelector(
    selectGetAllUsersSelectors
  );

  return { getAllUsersIsLoading, allUsers, getAllUsersError };
};

export default useGetAllUsersSelectors;
