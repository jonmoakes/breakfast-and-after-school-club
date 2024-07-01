import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { requestIncomeDataAsync } from "../../../store/income-data/income-data.thunks";

const useFetchIncomeDataThunkUseEffect = () => {
  const { stripeSecretKey, currentUser } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!stripeSecretKey || !currentUser) return;

    dispatch(requestIncomeDataAsync({ stripeSecretKey }));
  }, [stripeSecretKey, currentUser, dispatch]);
};

export default useFetchIncomeDataThunkUseEffect;
