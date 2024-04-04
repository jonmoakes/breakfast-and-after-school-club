import useGetUserBookingToDeleteSelectors from "../../../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useCancelBookingVariables from "./use-cancel-booking-variables";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
// import useCancelBookingFunctions from "./use-cancel-booking-functions";

const useGetRefundPrice = () => {
  const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();
  const { walletBalance } = useGetCurrentUserSelectors();
  const {
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useGetSessionTypesAndPricesSelectors();
  const { numberOfChildrenInBooking } = useCancelBookingVariables();

  const { sessionType } = userBookingToDelete || {};

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
