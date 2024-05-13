import useGetSessionTypesAndPricesSelectors from "./get-selectors/use-get-session-types-and-prices-selectors";
import useGetCurrentUserSelectors from "./get-selectors/use-get-current-user-selectors";

const useGetSessionPrice = (sessionType, numberOfChildrenInBooking) => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const {
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useGetSessionTypesAndPricesSelectors();

  const getSessionPrice = () => {
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

  const sessionPrice =
    numberOfChildrenInBooking === 1
      ? getSessionPrice()
      : getSessionPrice() * numberOfChildrenInBooking;

  const formattedSessionPrice = (sessionPrice / 100).toFixed(2);
  const formattedBalanceAfterCancellation = (
    (walletBalance + sessionPrice) /
    100
  ).toFixed(2);

  return {
    sessionPrice,
    formattedSessionPrice,
    formattedBalanceAfterCancellation,
  };
};

export default useGetSessionPrice;
