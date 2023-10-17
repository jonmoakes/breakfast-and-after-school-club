import { useSelector } from "react-redux";

import useConditionalLogic from "../../book-a-session-hooks/use-conditional-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useGetPriceOfBooking from "../../../../hooks/use-get-price-of-booking";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import {
  selectMorningAndAfternoonShortSessionType,
  selectMorningAndAfternoonShortSessionPrice,
} from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const MorningAndAfternoonShortSessionButton = () => {
  const { allSessionsAvailable } = useConditionalLogic();
  const { confirmSession } = useConfirmSession();
  const { getPriceOfBooking } = useGetPriceOfBooking();

  const currentUser = useSelector(selectCurrentUser);
  const sessionType = useSelector(selectMorningAndAfternoonShortSessionType);
  const sessionPrice = useSelector(selectMorningAndAfternoonShortSessionPrice);

  const { walletBalance } = currentUser;
  const price = getPriceOfBooking(sessionPrice);

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
