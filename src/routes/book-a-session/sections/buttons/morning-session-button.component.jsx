import useCheckSpacesAvailable from "../../book-a-session-hooks/use-check-spaces-available-and-balance";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const MorningSessionButton = () => {
  const { onlyMorningSessionsAvailable, allSessionsAvailable } =
    useCheckSpacesAvailable();

  return (
    <>
      {onlyMorningSessionsAvailable() || allSessionsAvailable() ? (
        <>
          <YellowGreenButton>morning</YellowGreenButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default MorningSessionButton;
