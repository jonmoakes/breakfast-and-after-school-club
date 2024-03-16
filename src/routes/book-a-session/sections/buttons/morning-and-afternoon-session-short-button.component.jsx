import { useSelector } from "react-redux";

import useGetSessionTypesAndPrices from "../../book-a-session-hooks/get-session-types-and-prices/use-get-session-types-and-prices";
import useSessionLogic from "../../book-a-session-hooks/session-logic/use-session-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useGetPriceOfBooking from "../../book-a-session-hooks/use-get-price-of-booking";

import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const MorningAndAfternoonShortSessionButton = () => {
  const {
    morningAndAfternoonShortSessionType: sessionType,
    morningAndAfternoonShortSessionPrice: sessionPrice,
  } = useGetSessionTypesAndPrices();
  const { allSessionsAvailable } = useSessionLogic();
  const { confirmSession } = useConfirmSession();
  const { getPriceOfBooking } = useGetPriceOfBooking();

  const { currentUser } = useSelector(selectCurrentUserSelectors);

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
