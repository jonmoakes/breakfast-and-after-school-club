import useBookSessionActions from "../../../hooks/get-actions/use-book-session-actions";
import useDatesLogic from "../book-a-session-hooks/logic/use-dates-logic";
import useTimesLogic from "../book-a-session-hooks/logic/use-times-logic";
import useGetChildrenLogic from "../book-a-session-hooks/logic/use-get-children-logic";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";

import { OptionsForm } from "../../../styles/form/form.styles";
import { Text } from "../../../styles/p/p.styles";
import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";

const ChildCheckbox = () => {
  const { dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable } =
    useDatesLogic();
  const { isTodayAndAfterAfternoonSessionCloseTime } = useTimesLogic();
  const { hasOneChild } = useGetChildrenLogic();
  const { handleSetChildrenSelectedForBookingChange } = useBookSessionActions();
  const { usersChildren } = useGetUsersChildrenSelectors();

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
                  <label>{child.childName}</label>
                  <input
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
