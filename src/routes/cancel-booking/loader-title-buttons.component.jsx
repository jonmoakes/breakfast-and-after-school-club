import { useSelector } from "react-redux";
import { format } from "date-fns";

import useConfirmCancelBooking from "./hooks/use-confirm-cancel-booking";
import useCancelAndReturn from "../../hooks/use-cancel-and-return";
import useGetRefundPrice from "./hooks/use-get-refund-price";

import {
  selectIsLoading,
  selectUserBookingToDelete,
} from "../../store/user-booking-to-delete/user-booking-to-delete.selector";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text, RedText } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { RedSpan } from "../../styles/span/span.styles";

import { getSessionTypeString } from "../../functions/get-session-type-string";

const LoaderTitleButtons = () => {
  const { confirmCancelBooking } = useConfirmCancelBooking();
  const { cancelAndReturn } = useCancelAndReturn();
  const { refundPrice, refundForMoreThanOneChild, numberOfChildrenInBooking } =
    useGetRefundPrice();

  const isLoading = useSelector(selectIsLoading);
  const userBookingToDelete = useSelector(selectUserBookingToDelete);

  const { date, sessionType, childrensName } = userBookingToDelete || {};

  const refundAmount =
    numberOfChildrenInBooking > 1 ? refundForMoreThanOneChild : refundPrice;

  return (
    <>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>cancel booking</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>are about to cancel your booking for:</Text>
        <RedText>{date ? format(new Date(date), "dd MMMM yyyy") : ""}</RedText>

        <Text>
          session Type:
          <br />
          <RedSpan>{getSessionTypeString(sessionType)}</RedSpan>
        </Text>
        <Text>
          children in booking:
          <br />
          <RedSpan>{childrensName}</RedSpan>
        </Text>
        <Text>
          <RedSpan>£{refundAmount / 100}</RedSpan> will be added to your wallet
          on completion of the cancellation.
        </Text>
        <Text>
          if you wish to continue, tap the 'confirm cancellation' button below.
        </Text>
      </ParentDiv>

      <ParentDiv>
        <YellowGreenButton type="button" onClick={confirmCancelBooking}>
          confirm cancellation
        </YellowGreenButton>

        <Text>or</Text>
        <YellowGreenButton type="button" onClick={cancelAndReturn}>
          keep booking and return
        </YellowGreenButton>
      </ParentDiv>
    </>
  );
};

export default LoaderTitleButtons;
