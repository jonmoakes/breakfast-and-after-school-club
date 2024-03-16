import { useSelector } from "react-redux";

import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";
import { selectSessionTypesAndPricesSelectors } from "../../../../store/session-types-and-prices/session-types-and-prices.slice";
import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";

const useHasInsufficientFunds = () => {
  const { currentUser } = useSelector(selectCurrentUserSelectors);
  const { morningSessionPrice } = useSelector(
    selectSessionTypesAndPricesSelectors
  );

  const { walletBalance } = currentUser;

  const hasInsufficientFunds = () => {
    return walletBalance < priceMultipliedBy100(morningSessionPrice)
      ? true
      : false;
  };

  return { hasInsufficientFunds };
};

export default useHasInsufficientFunds;
