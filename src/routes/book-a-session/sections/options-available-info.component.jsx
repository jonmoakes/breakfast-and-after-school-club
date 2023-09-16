import useGetDateAndTime from "../book-a-session-hooks/use-get-date-and-time";
import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";

import { addFundsRoute } from "../../../strings/strings";

const OptionsAvailableInfo = () => {
  const { date } = useConditionalLogic();
  const { formattedTodaysDate } = useGetDateAndTime();

  return (
    <>
      <Text>
        based on your balance,{" "}
        {date === formattedTodaysDate
          ? "the time of day you are trying to book"
          : null}{" "}
        and spaces available, you can choose the following options.
      </Text>
      <Text>
        if you need to add more funds,{" "}
        <StyledLink to={addFundsRoute}>tap here</StyledLink>.
      </Text>
    </>
  );
};

export default OptionsAvailableInfo;
