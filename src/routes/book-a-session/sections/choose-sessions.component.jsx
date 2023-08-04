import { ColumnDiv } from "../../../styles/div/div.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const ChooseSessions = () => {
  return (
    <>
      <ColumnDiv>
        <BlackHr />

        <YellowGreenButton>morning</YellowGreenButton>
        <BlackHr />

        <YellowGreenButton>afternoon &ndash; short</YellowGreenButton>
        <BlackHr />

        <YellowGreenButton>afternoon &ndash; long</YellowGreenButton>
        <BlackHr />

        <YellowGreenButton>AM & PM &ndash; short</YellowGreenButton>
        <BlackHr />

        <YellowGreenButton>AM & PM &ndash; long</YellowGreenButton>
        <BlackHr />
      </ColumnDiv>
    </>
  );
};

export default ChooseSessions;
