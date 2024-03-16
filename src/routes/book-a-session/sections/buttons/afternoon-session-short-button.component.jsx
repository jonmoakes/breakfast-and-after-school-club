import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useGetPriceOfBooking from "../../book-a-session-hooks/logic/use-get-price-of-booking";
import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useSessionLogic from "../../book-a-session-hooks/logic/use-session-logic";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const AfternoonSessionShortButton = () => {
  const {
    afternoonShortSessionType: sessionType,
    afternoonShortSessionPrice: sessionPrice,
  } = useGetSessionTypesAndPricesSelectors();
  const { onlyAfternoonSessionsAvailable, allSessionsAvailable } =
    useSessionLogic();
  const { confirmSession } = useConfirmSession();
  const { walletBalance } = useGetCurrentUserSelectors();
  const { getPriceOfBooking } = useGetPriceOfBooking();

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
