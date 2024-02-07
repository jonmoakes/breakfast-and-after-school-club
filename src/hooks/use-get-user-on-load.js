import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getUserOnLoadAsync } from "../store/user/user.thunks";
import { selectCurrentUser } from "../store/user/user.selector";
const useGetUserOnLoad = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (currentUser) return;
    dispatch(getUserOnLoadAsync());
  }, [dispatch, currentUser, path]);
};

export default useGetUserOnLoad;
