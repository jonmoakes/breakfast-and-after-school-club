import { useSelector } from "react-redux";

import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import { selectMorningSession } from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const MorningSessionButton = () => {
  const { onlyMorningSessionsAvailable, allSessionsAvailable } =
    useCheckSpacesAvailable();
  const { confirmSession } = useConfirmSession();

  const morningSessionData = useSelector(selectMorningSession);
  const { sessionType, price } = morningSessionData;

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
