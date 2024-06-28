import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";

import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { Text } from "../../../../../styles/p/p.styles";
import { LowercasedSpan } from "../../../../../styles/span/span.styles";

const AlreadyBookedInfo = () => {
  const { hasMoreThanOneChild } = useRecurringSessionsFunctions();

  return (
    <>
      {hasMoreThanOneChild() ? (
        <>
          <Text>
            at least one of your children is already booked into one or more of
            the sessions in the above list.
          </Text>
        </>
      ) : (
        <>
          <Text>
            you have already booked one or more of the above sessions .
          </Text>
        </>
      )}
      <Text>
        would you like to remove the session(
        <LowercasedSpan>s</LowercasedSpan>) and just book the remaining ones?
      </Text>
      <BlackHr />
    </>
  );
};

export default AlreadyBookedInfo;
