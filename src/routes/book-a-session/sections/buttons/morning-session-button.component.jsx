import { useSelector } from "react-redux";

import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import {
  selectMorningSessionType,
  selectMorningSessionPrice,
} from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";
import useConditionalLogic from "../../book-a-session-hooks/use-conditional-logic";

const MorningSessionButton = () => {
  const { onlyMorningSessionsAvailable, allSessionsAvailable } =
    useConditionalLogic();
  const { confirmSession } = useConfirmSession();

  const sessionType = useSelector(selectMorningSessionType);
  const sessionPrice = useSelector(selectMorningSessionPrice);

  const price = priceMultipliedBy100(sessionPrice);

  return (
    <>
      {onlyMorningSessionsAvailable() || allSessionsAvailable() ? (
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
