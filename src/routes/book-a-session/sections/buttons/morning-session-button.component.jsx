import { useSelector } from "react-redux";

import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useConditionalLogic from "../../book-a-session-hooks/use-conditional-logic";
import useGetPriceOfBooking from "../../../../hooks/use-get-price-of-booking";

import { selectCurrentUser } from "../../../../store/user/user.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const MorningSessionButton = () => {
  const {
    onlyMorningSessionsAvailable,
    allSessionsAvailable,
    morningSessionType: sessionType,
    morningSessionPrice: sessionPrice,
  } = useConditionalLogic();
  const { confirmSession } = useConfirmSession();
  const { getPriceOfBooking } = useGetPriceOfBooking();

  const currentUser = useSelector(selectCurrentUser);

  const { walletBalance } = currentUser;
  const price = getPriceOfBooking(sessionPrice);

  return (
    <>
      {(onlyMorningSessionsAvailable() || allSessionsAvailable()) &&
      walletBalance >= price ? (
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
