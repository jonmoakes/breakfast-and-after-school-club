import { useSelector } from "react-redux";

import useConfirmCancelBooking from "./hooks/use-confirm-cancel-booking";
import useCancelAndReturn from "../../hooks/use-cancel-and-return";

import { selectIsLoading } from "../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { selectGetPricesError } from "../../store/session-types-and-prices/session-types-and-prices.selector";

import Loader from "../../components/loader/loader.component";
import WalletUpdateInfo from "./wallet-update-info.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import GetSessionPricesError from "../../components/errors/get-session-prices-error.component";

const LoaderTitleButtons = () => {
  const { confirmCancelBooking } = useConfirmCancelBooking();
  const { cancelAndReturn } = useCancelAndReturn();

  const isLoading = useSelector(selectIsLoading);
  const sessionPricesError = useSelector(selectGetPricesError);

  return (
    <>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>cancel booking</BlackTitle>
      </ParentDiv>

      {!sessionPricesError ? (
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
        <GetSessionPricesError />
      )}
    </>
  );
};

export default LoaderTitleButtons;
