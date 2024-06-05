import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useSessionLogic from "../../book-a-session-hooks/logic/use-session-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useGetPriceTimesOneHundred from "../../book-a-session-hooks/logic/use-get-price-times-one-hundred";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import usePricesToFixedLogic from "../../../../hooks/use-prices-to-fixed-logic";

const AfternoonSessionLongButton = () => {
  const {
    afternoonLongSessionType: sessionType,
    afternoonLongSessionPrice: sessionPrice,
  } = useGetSessionTypesAndPricesSelectors();
  const {
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    enoughSpacesAvailableInAfternoonForMultipleChildrenInBooking,
  } = useSessionLogic();
  const { confirmSession } = useConfirmSession();
  const { walletBalance } = useGetCurrentUserSelectors();
  const { getPriceTimesOneHundred } = useGetPriceTimesOneHundred();
  const { afternoonShortSessionPriceToFixed } = usePricesToFixedLogic();

  const price = getPriceTimesOneHundred(sessionPrice);
  //needs to be called price as that is what confirmSession is expecting.
  // will get the price whether one or multiple children have been selected.

  return (
    <>
      {(onlyAfternoonSessionsAvailable() || allSessionsAvailable()) &&
      walletBalance >= price &&
      enoughSpacesAvailableInAfternoonForMultipleChildrenInBooking() ? (
        <>
          <YellowGreenButton onClick={() => confirmSession(sessionType, price)}>
            afternoon {afternoonShortSessionPriceToFixed ? "- long" : ""}
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default AfternoonSessionLongButton;
