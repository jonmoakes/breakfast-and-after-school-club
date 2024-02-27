import { useSelector } from "react-redux";

import useConditionalLogic from "../../book-a-session-hooks/use-conditional-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import { selectCurrentUser } from "../../../../store/user/user.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import useGetPriceOfBooking from "../../../../hooks/use-get-price-of-booking";

const AfternoonSessionShortButton = () => {
  const {
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    afternoonShortSessionType: sessionType,
    afternoonShortSessionPrice: sessionPrice,
  } = useConditionalLogic();
  const { confirmSession } = useConfirmSession();
  const { getPriceOfBooking } = useGetPriceOfBooking();

  const currentUser = useSelector(selectCurrentUser);

  const { walletBalance } = currentUser;
  const price = getPriceOfBooking(sessionPrice);

  return (
    <>
      {(onlyAfternoonSessionsAvailable() || allSessionsAvailable()) &&
      walletBalance >= price ? (
        <>
          <YellowGreenButton onClick={() => confirmSession(sessionType, price)}>
            afternoon - short
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default AfternoonSessionShortButton;
