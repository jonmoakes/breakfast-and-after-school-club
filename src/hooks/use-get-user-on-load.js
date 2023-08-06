import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserOnLoadAsync } from "../store/user/user.actions";
import { selectCurrentUser } from "../store/user/user.selector";

const useGetUserOnLoad = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) return;
    dispatch(getUserOnLoadAsync());
  }, [dispatch, currentUser]);
};

export default useGetUserOnLoad;
