import { useSelector } from "react-redux";

import useConditionalLogic from "../../book-a-session-hooks/use-conditional-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import {
  selectAfternoonShortSessionType,
  selectAfternoonShortSessionPrice,
} from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import useGetPriceOfBooking from "../../../../hooks/use-get-price-of-booking";

const AfternoonSessionShortButton = () => {
  const { onlyAfternoonSessionsAvailable, allSessionsAvailable } =
    useConditionalLogic();
  const { confirmSession } = useConfirmSession();
  const { getPriceOfBooking } = useGetPriceOfBooking();

  const sessionType = useSelector(selectAfternoonShortSessionType);
  const sessionPrice = useSelector(selectAfternoonShortSessionPrice);

  const price = getPriceOfBooking(sessionPrice);

  return (
    <>
      {onlyAfternoonSessionsAvailable() || allSessionsAvailable() ? (
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
