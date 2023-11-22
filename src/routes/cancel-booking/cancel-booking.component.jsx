import useGetSessionPrices from "../../hooks/use-get-session-prices";
import useCancelBookingResultSwal from "./hooks/swals/use-cancel-booking-result-swal";

import LoaderTitleButtons from "./loader-title-buttons.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";

const CancelBooking = () => {
  useGetSessionPrices();
  useCancelBookingResultSwal();

  return (
    <NoHeaderFooterContainer>
      <LoaderTitleButtons />
    </NoHeaderFooterContainer>
  );
};

export default CancelBooking;
