import { useSelector } from "react-redux";
import { format } from "date-fns";

import useGetRefundPrice from "./hooks/use-get-refund-price";

import { selectUserBookingToDelete } from "../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import { ParentDiv } from "../../styles/div/div.styles";
import { RedText, Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { getSessionTypeString } from "../../functions/get-session-type-string";

const WalletUpdateInfo = () => {
  const { refundPrice, totalRefundPrice, numberOfChildrenInBooking } =
    useGetRefundPrice();

  const userBookingToDelete = useSelector(selectUserBookingToDelete);
  const { currentUser } = useSelector(selectCurrentUserSelectors);

  const { walletBalance } = currentUser;
  const { date, sessionType, childrensName } = userBookingToDelete || {};
  const refundAmount =
    numberOfChildrenInBooking > 1 ? totalRefundPrice : refundPrice;

  return (
    <ParentDiv>
      <BlackHr />
      <Text>you are about to cancel your booking for:</Text>
      <BlackHr />
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

      <BlackHr />

      <Text>
        <RedSpan>£{refundAmount / 100}</RedSpan> will be added to your wallet on
        completion of the cancellation.
      </Text>

      <BlackHr />

      <Text>balance before cancellation:</Text>
      <Text>
        <RedSpan>£{(walletBalance / 100).toFixed(2)}</RedSpan>
      </Text>

      <BlackHr />

      <Text>balance after cancellation:</Text>
      <Text>
        <RedSpan>£{((walletBalance + refundAmount) / 100).toFixed(2)}</RedSpan>
      </Text>
      <BlackHr />
      <Text>
        if you wish to continue, tap the 'confirm cancellation' button below.
      </Text>

      <BlackHr />
    </ParentDiv>
  );
};

export default WalletUpdateInfo;
