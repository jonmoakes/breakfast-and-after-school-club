import useGetSessionPricesThunkUseEffect from "../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-get-session-prices-thunk-use-effect";
import useCancelBookingResultSwal from "./hooks/swals/use-cancel-booking-result-swal";

import LoaderTitleButtons from "./loader-title-buttons.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";

const CancelBooking = () => {
  useGetSessionPricesThunkUseEffect();
  useCancelBookingResultSwal();

  return (
    <NoHeaderFooterContainer>
      <LoaderTitleButtons />
    </NoHeaderFooterContainer>
  );
};

export default CancelBooking;
