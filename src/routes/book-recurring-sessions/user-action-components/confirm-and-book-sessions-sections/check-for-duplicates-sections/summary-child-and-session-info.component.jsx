import { removeStarFromChildrensNamesIfExists } from "../../../../../functions/remove-star-from-childrens-name-if-exists";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { Text } from "../../../../../styles/p/p.styles";
import { BlackSpan, RedSpan } from "../../../../../styles/span/span.styles";
import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";

import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";

const SummaryChildAndSessionInfo = () => {
  const { hasMoreThanOneChild } = useRecurringSessionsFunctions();
  const { childrensNamesInBooking, sessionChoice } =
    useBookRecurringSessionsVariables();

  return (
    <>
      {hasMoreThanOneChild() && (
        <>
          <BlackHr />
          <Text>
            for the following children:
            <RedSpan>
              <br />
              {removeStarFromChildrensNamesIfExists(childrensNamesInBooking)}
            </RedSpan>
          </Text>
        </>
      )}
      <BlackHr />
      <Text>
        <BlackSpan>for the</BlackSpan> <RedSpan>{sessionChoice}</RedSpan>{" "}
        session.
      </Text>
    </>
  );
};

export default SummaryChildAndSessionInfo;
