import useGetSessionPrices from "../../hooks/use-get-session-prices";
import useCancelBookingResultSwal from "./hooks/swals/use-cancel-booking-result-swal";

import LoaderTitleButtons from "./loader-title-buttons.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import useGetUsersChildren from "../child-info/child-info-hooks/use-get-users-children";

const CancelBooking = () => {
  useGetSessionPrices();
  useGetUsersChildren();
  useCancelBookingResultSwal();

  return (
    <NoHeaderFooterContainer>
      <LoaderTitleButtons />
    </NoHeaderFooterContainer>
  );
};

export default CancelBooking;
