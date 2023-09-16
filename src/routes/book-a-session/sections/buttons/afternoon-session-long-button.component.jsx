import { useSelector } from "react-redux";

import useConditionalLogic from "../../book-a-session-hooks/use-conditional-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import {
  selectAfternoonLongSessionType,
  selectAfternoonLongSessionPrice,
} from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";

const AfternoonSessionLongButton = () => {
  const { onlyAfternoonSessionsAvailable, allSessionsAvailable } =
    useConditionalLogic();
  const { confirmSession } = useConfirmSession();

  const currentUser = useSelector(selectCurrentUser);
  const sessionType = useSelector(selectAfternoonLongSessionType);
  const sessionPrice = useSelector(selectAfternoonLongSessionPrice);

  const { walletBalance } = currentUser;

  const price = priceMultipliedBy100(sessionPrice);

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
