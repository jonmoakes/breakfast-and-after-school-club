import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { setChildrenSelectedForBooking } from "../../../store/book-session/book-session.slice";
import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";

import { Text } from "../../../styles/p/p.styles";
import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import { OptionsForm } from "../../../styles/form/form.styles";

const ChildCheckbox = () => {
  const {
    dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable,
    isTodayAndAfterCloseTime,
    hasOneChild,
  } = useConditionalLogic();

  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setChildrenSelectedForBooking({ [name]: checked }));
  };

  return (
    <>
      {dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable() ||
      isTodayAndAfterCloseTime() ||
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
