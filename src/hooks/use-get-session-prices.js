import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getSessionPricesAsync } from "../store/session-types-and-prices/session-types-and-prices.slice";

const useGetSessionPrices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionPricesAsync());
  }, [dispatch]);
};

export default useGetSessionPrices;
