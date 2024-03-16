import useDatesLogic from "../book-a-session-hooks/dates-logic/use-dates-logic";
import useTimesLogic from "../book-a-session-hooks/times-logic/use-times-logic";

import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import useGetChildrenLogic from "../book-a-session-hooks/get-children-logic/use-get-children-logic";

const OptionsAvailableInfo = () => {
  const { morningSessionSpaces, afternoonSessionSpaces } = useDatesLogic();
  const {
    isTodayAndAfterMorningSessionCloseTime,
    isTodayAndAfterAfternoonSessionCloseTime,
  } = useTimesLogic();
  const { childrenSelectedForBooking } = useGetChildrenLogic();

  return (
    <>
      {!isTodayAndAfterMorningSessionCloseTime() ? (
        <>
          <Text>
            morning session spaces available:
            <br />
            <RedSpan>{morningSessionSpaces}</RedSpan>
          </Text>
          <BlackHr />
        </>
      ) : null}

      {!isTodayAndAfterAfternoonSessionCloseTime() ? (
        <>
          <Text>
            afternoon session spaces available:
            <br />
            <RedSpan>{afternoonSessionSpaces}</RedSpan>
          </Text>
          <BlackHr />
        </>
      ) : null}

      <Text>
        you can choose the following options:
        <br />( if you see no options at all, please check your wallet balance{" "}
        {childrenSelectedForBooking.length > 1
          ? "and number of children you have selected compared to the number of spaces available"
          : null}{" "}
        ).
      </Text>
    </>
  );
};

export default OptionsAvailableInfo;
