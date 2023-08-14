import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../../../store/user/user.selector";

import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import { morningAndAfternoonLongSessionPrice } from "../../../../session-prices/session-prices";

const MorningAndAfternoonLongSessionButton = () => {
  const { allSessionsAvailable } = useCheckSpacesAvailable();

  const currentUser = useSelector(selectCurrentUser);
  const { walletBalance } = currentUser;

  return (
    <>
      {allSessionsAvailable() &&
      walletBalance >= morningAndAfternoonLongSessionPrice ? (
        <>
          <YellowGreenButton>AM & PM - long</YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default MorningAndAfternoonLongSessionButton;
