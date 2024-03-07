import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const OptionsAvailableInfo = () => {
  const {
    date,
    formattedTodaysDate,
    morningSessionSpaces,
    afternoonSessionSpaces,
  } = useConditionalLogic();

  return (
    <>
      <Text>
        morning session spaces available:
        <br />
        <RedSpan>{morningSessionSpaces}</RedSpan>
      </Text>
      <BlackHr />
      <Text>
        afternoon session spaces available:
        <br />
        <RedSpan>{afternoonSessionSpaces}</RedSpan>
      </Text>
      <BlackHr />
      <Text>
        based on your wallet balance,{" "}
        {date === formattedTodaysDate
          ? "the time of day you are trying to book"
          : null}{" "}
        and spaces available, you can choose the following options.
      </Text>
    </>
  );
};

export default OptionsAvailableInfo;
