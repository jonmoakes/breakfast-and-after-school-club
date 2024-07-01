import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetIncomeDataSelectors from "../../get-selectors/use-get-income-data-selectors";
import { requestIncomeDataAsync } from "../../../store/income-data/income-data.thunks";

const useFetchIncomeDataThunkUseEffect = () => {
  const { stripeSecretKey, currentUser } = useGetCurrentUserSelectors();
  const { incomeData } = useGetIncomeDataSelectors();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!stripeSecretKey || !currentUser || (incomeData && incomeData.length))
      return;

    dispatch(requestIncomeDataAsync({ stripeSecretKey }));
  }, [stripeSecretKey, currentUser, incomeData, dispatch]);
};

export default useFetchIncomeDataThunkUseEffect;
