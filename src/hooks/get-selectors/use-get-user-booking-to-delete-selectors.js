import { useSelector } from "react-redux";
import { selectUserBookingToDeleteSelectors } from "../../store/user-booking-to-delete/user-booking-to-delete.slice";

const useGetUserBookingToDeleteSelectors = () => {
  const {
    userBookingToDeleteIsLoading,
    userBookingToDelete,
    updateBookingsDoc,
    updateUserDocBalance,
  } = useSelector(selectUserBookingToDeleteSelectors);

  const updateBookingsResult = updateBookingsDoc.result;
  const updateBookingsError = updateBookingsDoc.error;

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;

  return {
    userBookingToDeleteIsLoading,
    userBookingToDelete,
    updateBookingsDoc,
    updateUserDocBalance,

    updateBookingsResult,
    updateBookingsError,
    updateBalanceResult,
    updateBalanceError,
  };
};

export default useGetUserBookingToDeleteSelectors;
