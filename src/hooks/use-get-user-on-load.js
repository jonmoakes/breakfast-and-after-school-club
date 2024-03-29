import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "./get-selectors/use-get-current-user-selectors";
import { getUserOnLoadAsync } from "../store/user/user.thunks";

const useGetUserOnLoad = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (currentUser) return;
    dispatch(getUserOnLoadAsync());
  }, [dispatch, currentUser, path]);
};

export default useGetUserOnLoad;
