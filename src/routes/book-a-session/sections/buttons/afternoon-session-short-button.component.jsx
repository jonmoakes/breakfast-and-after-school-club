import { useSelector } from "react-redux";

import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import { selectAfternoonShortSession } from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const AfternoonSessionShortButton = () => {
  const { onlyAfternoonSessionsAvailable, allSessionsAvailable } =
    useCheckSpacesAvailable();
  const { confirmSession } = useConfirmSession();

  const afternoonShortSessionData = useSelector(selectAfternoonShortSession);
  const { sessionType, price } = afternoonShortSessionData;

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
