import useGetSessionTypesAndPricesSelectors from "../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useGetSendEmailSelectors from "../../hooks/get-selectors/use-get-send-email-selectors";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useGetUserBookingToDeleteSelectors from "../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";
import useConfirmCancelBooking from "./hooks/use-confirm-cancel-booking";
import useCancelAndReturn from "../../hooks/use-cancel-and-return";
import useCancelBookingVariables from "./hooks/use-cancel-booking-variables";

import Loader from "../../components/loader/loader.component";
import WalletUpdateInfo from "./wallet-update-info.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const LoaderTitleButtons = () => {
  const { sessionTypesAndPricesError } = useGetSessionTypesAndPricesSelectors();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const { userBookingToDeleteIsLoading } = useGetUserBookingToDeleteSelectors();
  const { confirmCancelBooking } = useConfirmCancelBooking();
  const { cancelAndReturn } = useCancelAndReturn();
  const { userBookingToDelete } = useCancelBookingVariables();

  return (
    <>
      {userBookingToDeleteIsLoading ||
      databaseManagementIsLoading ||
      sendEmailIsLoading ? (
        <Loader />
      ) : null}

      <ParentDiv>
        <BlackTitle>cancel booking</BlackTitle>
      </ParentDiv>

      {sessionTypesAndPricesError ? (
        <ShowFetchErrors />
      ) : !sessionTypesAndPricesError && userBookingToDelete === undefined ? (
        <ParentDiv>
          <Text>
            sorry, we lost the booking details
            <br />( most likely after a page reload ).
          </Text>
          <Text>
            reloading the page causes the data that was passed to this page to
            be lost.
          </Text>
          <Text>
            please tap the button below to return to the table and then reselect
            the booking you wish to cancel.
          </Text>
          <YellowGreenButton type="button" onClick={cancelAndReturn}>
            return to table
          </YellowGreenButton>
        </ParentDiv>
      ) : (
        <>
          <WalletUpdateInfo />

          <ParentDiv>
            <YellowGreenButton type="button" onClick={confirmCancelBooking}>
              confirm cancellation
            </YellowGreenButton>

            <Text>or</Text>
            <YellowGreenButton type="button" onClick={cancelAndReturn}>
              keep the booking
            </YellowGreenButton>
          </ParentDiv>
        </>
      )}
    </>
  );
};

export default LoaderTitleButtons;
