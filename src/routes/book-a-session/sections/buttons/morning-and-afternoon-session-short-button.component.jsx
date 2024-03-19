import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useSessionLogic from "../../book-a-session-hooks/logic/use-session-logic";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";
import useGetPriceTimesOneHundred from "../../book-a-session-hooks/logic/use-get-price-times-one-hundred";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const MorningAndAfternoonShortSessionButton = () => {
  const {
    morningAndAfternoonShortSessionType: sessionType,
    morningAndAfternoonShortSessionPrice: sessionPrice,
  } = useGetSessionTypesAndPricesSelectors();
  const { allSessionsAvailable } = useSessionLogic();
  const { confirmSession } = useConfirmSession();

  const { walletBalance } = useGetCurrentUserSelectors();
  const { getPriceTimesOneHundred } = useGetPriceTimesOneHundred();

  const price = getPriceTimesOneHundred(sessionPrice);

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
