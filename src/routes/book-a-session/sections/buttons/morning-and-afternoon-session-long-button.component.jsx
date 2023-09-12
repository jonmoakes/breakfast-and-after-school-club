import { useSelector } from "react-redux";

import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import {
  selectMorningAndAfternoonLongSessionType,
  selectMorningAndAfternoonLongSessionPrice,
} from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";

const MorningAndAfternoonLongSessionButton = () => {
  const { allSessionsAvailable } = useCheckSpacesAvailable();
  const { confirmSession } = useConfirmSession();

  const currentUser = useSelector(selectCurrentUser);
  const sessionType = useSelector(selectMorningAndAfternoonLongSessionType);
  const sessionPrice = useSelector(selectMorningAndAfternoonLongSessionPrice);

  const { walletBalance } = currentUser;

  const price = priceMultipliedBy100(sessionPrice);
  return (
    <>
      {allSessionsAvailable() && walletBalance >= price ? (
        <>
          <YellowGreenButton onClick={() => confirmSession(sessionType, price)}>
            AM & PM - long
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default MorningAndAfternoonLongSessionButton;
