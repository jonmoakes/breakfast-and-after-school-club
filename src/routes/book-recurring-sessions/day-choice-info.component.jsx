import { MinimalButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const DayChoiceInfo = ({ dayChoice, resetChoices }) => (
  <>
    {dayChoice ? (
      <>
        <Text>
          you have chosen a:
          <br />
          <RedSpan>{dayChoice}</RedSpan>
        </Text>
        <MinimalButton onClick={resetChoices}>change day</MinimalButton>
        <BlackHr />
      </>
    ) : null}
  </>
);

export default DayChoiceInfo;
