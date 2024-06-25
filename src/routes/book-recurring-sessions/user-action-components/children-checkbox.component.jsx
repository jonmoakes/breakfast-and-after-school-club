import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useBookSessionActions from "../../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";

import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import {
  Label,
  OptionsForm,
  StyledCheckbox,
} from "../../../styles/form/form.styles";
import { Text } from "../../../styles/p/p.styles";

const ChildrenCheckbox = () => {
  const { usersChildren } = useBookRecurringSessionsVariables();
  const { hasOneChild, hasMoreThanOneChild } = useRecurringSessionsFunctions();
  const { handleSetChildrenSelectedForBookingChange } = useBookSessionActions();

  return (
    <>
      {hasOneChild() ? null : hasMoreThanOneChild() ? (
        <ParentDiv className="bounce">
          <Text>which children would you like to book the session for?</Text>

          <OptionsForm onChange={handleSetChildrenSelectedForBookingChange}>
            {usersChildren.map((child) => (
              <RadioDiv key={child.$id}>
                <Label className="book-session">{child.childName}</Label>
                <StyledCheckbox
                  type="checkbox"
                  id={child.childName}
                  name={child.childName}
                  checked={child.checked}
                />
              </RadioDiv>
            ))}
          </OptionsForm>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChildrenCheckbox;
