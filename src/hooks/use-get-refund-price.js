import useGetSessionTypesAndPricesSelectors from "./get-selectors/use-get-session-types-and-prices-selectors";
import useGetCurrentUserSelectors from "./get-selectors/use-get-current-user-selectors";

const useGetRefundPrice = (sessionType, numberOfChildrenInBooking) => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const {
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useGetSessionTypesAndPricesSelectors();

  const getRefundPrice = () => {
    switch (sessionType) {
      case "afternoonShort":
        return afternoonShortSessionPrice * 100;
      case "afternoonLong":
        return afternoonLongSessionPrice * 100;
      case "morningAndAfternoonShort":
        return morningAndAfternoonShortSessionPrice * 100;
      case "morningAndAfternoonLong":
        return morningAndAfternoonLongSessionPrice * 100;
      default:
        return morningSessionPrice * 100;
    }
  };

  const refundPrice =
    numberOfChildrenInBooking === 1
      ? getRefundPrice()
      : getRefundPrice() * numberOfChildrenInBooking;

  const formattedRefundPrice = (refundPrice / 100).toFixed(2);
  const formattedBalanceAfterCancellation = (
    (walletBalance + refundPrice) /
    100
  ).toFixed(2);

  return {
    refundPrice,
    formattedRefundPrice,
    formattedBalanceAfterCancellation,
  };
};

export default useGetRefundPrice;
