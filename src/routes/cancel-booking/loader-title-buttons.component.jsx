import { useSelector } from "react-redux";

import useConfirmCancelBooking from "./hooks/use-confirm-cancel-booking";
import useCancelAndReturn from "../../hooks/use-cancel-and-return";

import { selectUserBookingToDeleteSelectors } from "../../store/user-booking-to-delete/user-booking-to-delete.slice";
import { selectSessionTypesAndPricesSelectors } from "../../store/session-types-and-prices/session-types-and-prices.slice";

import Loader from "../../components/loader/loader.component";
import WalletUpdateInfo from "./wallet-update-info.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { selectSendEmailSelectors } from "../../store/send-email/send-email.slice";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

const LoaderTitleButtons = () => {
  const { confirmCancelBooking } = useConfirmCancelBooking();
  const { cancelAndReturn } = useCancelAndReturn();

  const { userBookingToDeleteIsLoading } = useSelector(
    selectUserBookingToDeleteSelectors
  );
  const { sendEmailIsLoading } = useSelector(selectSendEmailSelectors);
  const { sessionTypesAndPricesError } = useSelector(
    selectSessionTypesAndPricesSelectors
  );

  return (
    <>
      {userBookingToDeleteIsLoading || sendEmailIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>cancel booking</BlackTitle>
      </ParentDiv>

      {!sessionTypesAndPricesError ? (
        <>
          <WalletUpdateInfo />

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
      ) : (
        <ShowFetchErrors />
      )}
    </>
  );
};

export default LoaderTitleButtons;
