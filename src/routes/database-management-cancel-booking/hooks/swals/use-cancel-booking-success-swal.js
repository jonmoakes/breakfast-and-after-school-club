import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import { databaseManagementRoute } from "../../../../strings/routes/routes-strings";

const useCancelBookingSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const cancelBookingSuccessSwal = () => {
    fireSwal("success", "booking cancelled!", "", 0, true, false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(databaseManagementRoute);
        }
      }
    );
  };

  return { cancelBookingSuccessSwal };
};

export default useCancelBookingSuccessSwal;
