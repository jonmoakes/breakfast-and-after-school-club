import { useSelector, useDispatch } from "react-redux";

import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";
import useConfirmBookSession from "../../book-a-session-hooks/use-confirm-book-session";

import { selectMorningSession } from "../../../../store/session-types-and-prices/session-types-and-prices.selector";
import { setSessionType } from "../../../../store/book-session/book-session.slice";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

// import { useEffect } from "react";

const MorningSessionButton = () => {
  const { onlyMorningSessionsAvailable, allSessionsAvailable } =
    useCheckSpacesAvailable();
  const { confirmBookSession } = useConfirmBookSession();

  const morningSessionData = useSelector(selectMorningSession);
  const { sessionType, price } = morningSessionData;

  const dispatch = useDispatch();

  const confirmSession = () => {
    dispatch(setSessionType(sessionType));
    confirmBookSession(sessionType, price);
  };

  return (
    <>
      {onlyMorningSessionsAvailable() || allSessionsAvailable() ? (
        <>
          <YellowGreenButton onClick={confirmSession}>
            morning
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default MorningSessionButton;
