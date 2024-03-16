import { useDispatch, useSelector } from "react-redux";

import { setChildrenSelectedForBooking } from "../../../store/book-session/book-session.slice";
import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";

import { Text } from "../../../styles/p/p.styles";
import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import { OptionsForm } from "../../../styles/form/form.styles";
import useDatesLogic from "../book-a-session-hooks/dates-logic/use-dates-logic";
import useTimesLogic from "../book-a-session-hooks/times-logic/use-times-logic";
import useGetChildrenLogic from "../book-a-session-hooks/get-children-logic/use-get-children-logic";

const ChildCheckbox = () => {
  const { dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable } =
    useDatesLogic();
  const { isTodayAndAfterAfternoonSessionCloseTime } = useTimesLogic();
  const { hasOneChild } = useGetChildrenLogic();

  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setChildrenSelectedForBooking({ [name]: checked }));
  };

  return (
    <>
      {dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable() ||
      isTodayAndAfterAfternoonSessionCloseTime() ||
      hasOneChild() ? null : (
        <>
          <ParentDiv>
            <Text>which children would you like to book the session for?</Text>

            <OptionsForm onChange={handleChange}>
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
