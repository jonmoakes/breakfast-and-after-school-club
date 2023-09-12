import { useSelector } from "react-redux";

import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import {
  selectMorningAndAfternoonShortSessionType,
  selectMorningAndAfternoonShortSessionPrice,
} from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";

const MorningAndAfternoonShortSessionButton = () => {
  const { allSessionsAvailable } = useCheckSpacesAvailable();
  const { confirmSession } = useConfirmSession();

  const currentUser = useSelector(selectCurrentUser);
  const sessionType = useSelector(selectMorningAndAfternoonShortSessionType);
  const sessionPrice = useSelector(selectMorningAndAfternoonShortSessionPrice);

  const { walletBalance } = currentUser;

  const price = priceMultipliedBy100(sessionPrice);

  return (
    <>
      {allSessionsAvailable() && walletBalance >= price ? (
        <>
          <YellowGreenButton onClick={() => confirmSession(sessionType, price)}>
            AM & PM - short
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default MorningAndAfternoonShortSessionButton;
