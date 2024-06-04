import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useSessionLogic from "../../book-a-session-hooks/logic/use-session-logic";
import useGetPriceTimesOneHundred from "../../book-a-session-hooks/logic/use-get-price-times-one-hundred";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const MorningSessionButton = () => {
  const { morningSessionType: sessionType, morningSessionPrice: sessionPrice } =
    useGetSessionTypesAndPricesSelectors();

  const {
    onlyMorningSessionsAvailable,
    allSessionsAvailable,
    enoughSpacesAvailableInMorningForMultipleChildrenInBooking,
  } = useSessionLogic();
  const { confirmSession } = useConfirmSession();
  const { walletBalance } = useGetCurrentUserSelectors();
  const { getPriceTimesOneHundred } = useGetPriceTimesOneHundred();

  const price = getPriceTimesOneHundred(sessionPrice);

  return (
    <>
      {(onlyMorningSessionsAvailable() || allSessionsAvailable()) &&
      walletBalance >= price &&
      enoughSpacesAvailableInMorningForMultipleChildrenInBooking() ? (
        <>
          <YellowGreenButton onClick={() => confirmSession(sessionType, price)}>
            morning
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default MorningSessionButton;
