import { useSelector } from "react-redux";

import useGetSessionTypesAndPricesSelectors from "../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useGetSendEmailSelectors from "../../hooks/get-selectors/use-get-send-email-selectors";
import useConfirmCancelBooking from "./hooks/use-confirm-cancel-booking";
import useCancelAndReturn from "../../hooks/use-cancel-and-return";

import { selectUserBookingToDeleteSelectors } from "../../store/user-booking-to-delete/user-booking-to-delete.slice";

import Loader from "../../components/loader/loader.component";
import WalletUpdateInfo from "./wallet-update-info.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const LoaderTitleButtons = () => {
  const { sessionTypesAndPricesError } = useGetSessionTypesAndPricesSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const { confirmCancelBooking } = useConfirmCancelBooking();
  const { cancelAndReturn } = useCancelAndReturn();

  const { userBookingToDeleteIsLoading } = useSelector(
    selectUserBookingToDeleteSelectors
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
