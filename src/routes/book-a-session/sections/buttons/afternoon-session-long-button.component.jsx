import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../../../store/user/user.selector";

import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import { afternoonLongSessionPrice } from "../../../../session-prices/session-prices";

const AfternoonSessionLongButton = () => {
  const { onlyAfternoonSessionsAvailable, allSessionsAvailable } =
    useCheckSpacesAvailable();

  const currentUser = useSelector(selectCurrentUser);
  const { walletBalance } = currentUser;

  return (
    <>
      {(onlyAfternoonSessionsAvailable() &&
        walletBalance >= afternoonLongSessionPrice) ||
      (allSessionsAvailable() && walletBalance >= afternoonLongSessionPrice) ? (
        <>
          <YellowGreenButton>afternoon - long</YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default AfternoonSessionLongButton;
