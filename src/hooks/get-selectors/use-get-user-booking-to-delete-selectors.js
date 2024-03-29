import { useSelector } from "react-redux";
import { selectUserBookingToDeleteSelectors } from "../../store/user-booking-to-delete/user-booking-to-delete.slice";

const useGetUserBookingToDeleteSelectors = () => {
  const {
    userBookingToDeleteIsLoading,
    userBookingToDelete,
    updateBookingsDoc,
    updateUserDocBalance,
    updateSessionSpacesDoc,
  } = useSelector(selectUserBookingToDeleteSelectors);

  const updateBookingsResult = updateBookingsDoc.result;
  const updateBookingsError = updateBookingsDoc.error;

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;

  const updateSessionSpacesResult = updateSessionSpacesDoc.result;
  const updateSessionSpacesError = updateSessionSpacesDoc.error;

  return {
    userBookingToDeleteIsLoading,
    userBookingToDelete,
    updateBookingsDoc,
    updateUserDocBalance,
    updateSessionSpacesDoc,
    updateBookingsResult,
    updateBookingsError,
    updateBalanceResult,
    updateBalanceError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
  };
};

export default useGetUserBookingToDeleteSelectors;
