import { useSelector } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import { selectSessionTypesAndPricesSelectors } from "../../../../store/session-types-and-prices/session-types-and-prices.slice";
import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";

const useHasInsufficientFunds = () => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const { morningSessionPrice } = useSelector(
    selectSessionTypesAndPricesSelectors
  );

  const hasInsufficientFunds = () => {
    return walletBalance < priceMultipliedBy100(morningSessionPrice)
      ? true
      : false;
  };

  return { hasInsufficientFunds };
};

export default useHasInsufficientFunds;
