import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";

import { Text } from "../../../styles/p/p.styles";
import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import { OptionsForm } from "../../../styles/form/form.styles";
import { setChildrenToBook } from "../../../store/book-session/book-session.slice";

const SelectChildrenToBookSessionFor = () => {
  const { isTodayAndAfterCloseTime, showNothing, hasOneChild } =
    useConditionalLogic();

  const [chosenChildren, setChosenChildren] = useState({});

  const usersChildren = useSelector(selectUsersChildren);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name } = event.target;
    const childChecked = event.target.checked;
    setChosenChildren({
      ...chosenChildren,
      [name]: childChecked,
    });
  };

  useEffect(() => {
    dispatch(setChildrenToBook(chosenChildren));
  }, [dispatch, chosenChildren]);

  return (
    <>
      {showNothing() || isTodayAndAfterCloseTime() || hasOneChild() ? null : (
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

export default SelectChildrenToBookSessionFor;
