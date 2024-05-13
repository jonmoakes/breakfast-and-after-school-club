import { useSelector } from "react-redux";
import { selectUserBookingToDeleteSelectors } from "../../store/user-booking-to-delete/user-booking-to-delete.slice";

const useGetUserBookingToDeleteSelectors = () => {
  const {
    userBookingToDeleteIsLoading,
    userBookingToDelete,
    updateBookingsDoc,
  } = useSelector(selectUserBookingToDeleteSelectors);

  const updateBookingsResult = updateBookingsDoc.result;
  const updateBookingsError = updateBookingsDoc.error;

  return {
    userBookingToDeleteIsLoading,
    userBookingToDelete,
    updateBookingsDoc,
    updateBookingsResult,
    updateBookingsError,
  };
};

export default useGetUserBookingToDeleteSelectors;
