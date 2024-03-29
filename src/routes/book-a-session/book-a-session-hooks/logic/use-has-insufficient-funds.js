import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";

const useHasInsufficientFunds = () => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const { morningSessionPrice } = useGetSessionTypesAndPricesSelectors();

  const hasInsufficientFunds = () => {
    return walletBalance < priceMultipliedBy100(morningSessionPrice)
      ? true
      : false;
  };

  return { hasInsufficientFunds };
};

export default useHasInsufficientFunds;
