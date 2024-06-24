import { ParentDiv, RadioDiv } from "../../styles/div/div.styles";
import {
  Label,
  OptionsForm,
  StyledCheckbox,
} from "../../styles/form/form.styles";
import { Text } from "../../styles/p/p.styles";

const ChildrenCheckbox = ({
  hasOneChild,
  hasMoreThanOneChild,
  usersChildren,
  handleSetChildrenSelectedForBookingChange,
}) => (
  <>
    {hasOneChild() ? null : hasMoreThanOneChild() ? (
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
    ) : null}
  </>
);

export default ChildrenCheckbox;
