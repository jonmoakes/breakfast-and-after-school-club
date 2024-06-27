import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";

import { MinimalButton } from "../../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { Text } from "../../../../../styles/p/p.styles";
import { RedSpan } from "../../../../../styles/span/span.styles";

import { removeStarFromChildrensNamesIfExists } from "../../../../../functions/remove-star-from-childrens-name-if-exists";

const NamesOfChildrenInSessionInfo = () => {
  const { hasMoreThanOneChild, confirmReload } =
    useRecurringSessionsFunctions();
  const { childrensNamesInBooking } = useBookRecurringSessionsVariables();

  return (
    <>
      {hasMoreThanOneChild() ? (
        <>
          <BlackHr />
          <Text>
            and are booking sessions for
            <br />
            <RedSpan>
              {removeStarFromChildrensNamesIfExists(childrensNamesInBooking)}
            </RedSpan>
          </Text>
          <MinimalButton onClick={confirmReload}>change children</MinimalButton>
        </>
      ) : null}
    </>
  );
};

export default NamesOfChildrenInSessionInfo;
