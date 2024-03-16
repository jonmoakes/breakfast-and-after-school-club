import { useSelector } from "react-redux";

import useGetSessionTypesAndPrices from "../../book-a-session-hooks/get-session-types-and-prices/use-get-session-types-and-prices";
import useSessionLogic from "../../book-a-session-hooks/session-logic/use-session-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useGetPriceOfBooking from "../../book-a-session-hooks/use-get-price-of-booking";

import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const AfternoonSessionLongButton = () => {
  const {
    afternoonLongSessionType: sessionType,
    afternoonLongSessionPrice: sessionPrice,
  } = useGetSessionTypesAndPrices();
  const { onlyAfternoonSessionsAvailable, allSessionsAvailable } =
    useSessionLogic();

  const { confirmSession } = useConfirmSession();
  const { getPriceOfBooking } = useGetPriceOfBooking();

  const { currentUser } = useSelector(selectCurrentUserSelectors);

  const { walletBalance } = currentUser;

  //needs to be called price as that is what confirmSession is expecting.
  // will get the price whether one or multiple children have been selected.
  const price = getPriceOfBooking(sessionPrice);

  return (
    <>
      {(onlyAfternoonSessionsAvailable() || allSessionsAvailable()) &&
      walletBalance >= price ? (
        <>
          <YellowGreenButton onClick={() => confirmSession(sessionType, price)}>
            afternoon - long
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default AfternoonSessionLongButton;
