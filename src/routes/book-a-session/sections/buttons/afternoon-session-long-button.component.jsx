import { useSelector } from "react-redux";

import useConditionalLogic from "../../book-a-session-hooks/use-conditional-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useGetPriceOfBooking from "../../../../hooks/use-get-price-of-booking";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import {
  selectAfternoonLongSessionType,
  selectAfternoonLongSessionPrice,
} from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const AfternoonSessionLongButton = () => {
  const { onlyAfternoonSessionsAvailable, allSessionsAvailable } =
    useConditionalLogic();
  const { confirmSession } = useConfirmSession();
  const { getPriceOfBooking } = useGetPriceOfBooking();

  const currentUser = useSelector(selectCurrentUser);
  const sessionType = useSelector(selectAfternoonLongSessionType);
  const sessionPrice = useSelector(selectAfternoonLongSessionPrice);

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
