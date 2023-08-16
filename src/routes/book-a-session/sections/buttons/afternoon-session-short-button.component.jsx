import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";
import useConfirmBookSession from "../../book-a-session-hooks/use-confirm-book-session";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import { afternoonShortSessionPrice } from "../../../../session-prices/session-prices";

const AfternoonSessionShortButton = () => {
  const { onlyAfternoonSessionsAvailable, allSessionsAvailable } =
    useCheckSpacesAvailable();

  const sessionType = "afternoon";
  const price = afternoonShortSessionPrice;

  const { confirmBookSession } = useConfirmBookSession(sessionType, price);

  return (
    <>
      {onlyAfternoonSessionsAvailable() || allSessionsAvailable() ? (
        <>
          <YellowGreenButton onClick={confirmBookSession}>
            afternoon - short
          </YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default AfternoonSessionShortButton;
