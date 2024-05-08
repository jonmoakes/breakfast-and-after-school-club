import useCancelBookingVariables from "./hooks/use-cancel-booking-variables";
import useGetRefundPrice from "../../hooks/use-get-refund-price";

import { ParentDiv } from "../../styles/div/div.styles";
import { RedText, Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const WalletUpdateInfo = () => {
  const {
    childrensName,
    walletBalanceToFixed,
    formattedSessionType,
    formattedDate,
    sessionType,
    numberOfChildrenInBooking,
  } = useCancelBookingVariables();
  const { formattedRefundPrice, formattedBalanceAfterCancellation } =
    useGetRefundPrice(sessionType, numberOfChildrenInBooking);

  return (
    <ParentDiv>
      <BlackHr />
      <Text>you are about to cancel your booking for:</Text>
      <BlackHr />
      <RedText>{formattedDate}</RedText>

      <Text>
        session Type:
        <br />
        <RedSpan>{formattedSessionType}</RedSpan>
      </Text>

      <Text>
        children in booking:
        <br />
        <RedSpan>{childrensName}</RedSpan>
      </Text>

      <BlackHr />

      <Text>
        <RedSpan>£{formattedRefundPrice}</RedSpan> will be added to your wallet
        on completion of the cancellation.
      </Text>

      <BlackHr />

      <Text>balance before cancellation:</Text>
      <Text>
        <RedSpan>£{walletBalanceToFixed}</RedSpan>
      </Text>

      <BlackHr />

      <Text>balance after cancellation:</Text>
      <Text>
        <RedSpan>£{formattedBalanceAfterCancellation}</RedSpan>
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
