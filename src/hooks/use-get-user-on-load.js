import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUserOnLoadAsync } from "../store/user/user.slice";

const useGetUserOnLoad = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOnLoadAsync());
  }, [dispatch]);
};

export default useGetUserOnLoad;
