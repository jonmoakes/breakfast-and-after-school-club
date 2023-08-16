import { useSelector } from "react-redux";

import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";
import useConfirmSession from "../../book-a-session-hooks/use-confirm-session";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import { selectMorningAndAfternoonLongSession } from "../../../../store/session-types-and-prices/session-types-and-prices.selector";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const MorningAndAfternoonLongSessionButton = () => {
  const { allSessionsAvailable } = useCheckSpacesAvailable();
  const { confirmSession } = useConfirmSession();

  const currentUser = useSelector(selectCurrentUser);
  const morningAndAfternoonLongSessionData = useSelector(
    selectMorningAndAfternoonLongSession
  );
  const { walletBalance } = currentUser;
  const { sessionType, price } = morningAndAfternoonLongSessionData;

  return (
    <>
      {allSessionsAvailable() && walletBalance >= price ? (
        <>
          <YellowGreenButton onClick={() => confirmSession(sessionType, price)}>
            AM & PM - long
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default MorningAndAfternoonLongSessionButton;
