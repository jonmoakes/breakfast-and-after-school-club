import useBookSessionActions from "../../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useDatesLogic from "../book-a-session-hooks/logic/use-dates-logic";
import useTimesLogic from "../book-a-session-hooks/logic/use-times-logic";
import useGetChildrenLogic from "../book-a-session-hooks/logic/use-get-children-logic";

import {
  Label,
  OptionsForm,
  StyledCheckbox,
} from "../../../styles/form/form.styles";
import { Text } from "../../../styles/p/p.styles";
import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";

const ChildCheckbox = () => {
  const { dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable } =
    useDatesLogic();
  const { isTodayAndAfterAfternoonSessionCloseTime } = useTimesLogic();
  const { hasOneChild, usersChildren } = useGetChildrenLogic();
  const { handleSetChildrenSelectedForBookingChange } = useBookSessionActions();

  return (
    <>
      {dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable() ||
      isTodayAndAfterAfternoonSessionCloseTime() ||
      hasOneChild() ? null : (
        <>
          <ParentDiv>
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
        </>
      )}
    </>
  );
};

export default ChildCheckbox;
