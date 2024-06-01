import Balancer from "react-wrap-balancer";

import useAddChildInfoActions from "../../hooks/get-actions-and-thunks/add-child-info-actions-and-thunks/use-add-child-info-actions";
import useAddChildInfoLogic from "./add-child-info-hooks/use-add-child-info-logic";
import AddChildInfoButton from "./add-child-info-button.component";

import {
  Form,
  StyledInput,
  CapitalizedInput,
  StyledTextArea,
  Label,
} from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { ParentDiv, RadioDiv } from "../../styles/div/div.styles";
import { Text, WhiteShadowText } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import {
  leaveBlankIfNothingToAdd,
  anyOtherInfo,
} from "../../strings/placeholders/placeholders-strings";

const AddChildInfoForm = () => {
  const { handleAddChildInfoChange } = useAddChildInfoActions();
  const { childName, age, medicalInfo, dietryRequirements, additionalInfo } =
    useAddChildInfoLogic();

  return (
    <ParentDiv>
      <Text>
        <RedSpan>* </RedSpan> = required field:
      </Text>

      <Form>
        <Label>
          <RedSpan>* </RedSpan>Child Name:
        </Label>
        <CapitalizedInput
          type="text"
          name="childName"
          onChange={handleAddChildInfoChange}
          value={childName || ""}
          placeholder="full name please"
        />

        <Label>
          <RedSpan>* </RedSpan>Child Age:
        </Label>
        <StyledInput
          type="number"
          inputMode="numeric"
          name="age"
          onChange={handleAddChildInfoChange}
          value={age || ""}
        />

        <BlackHr />
        <RadioDiv>
          <WhiteShadowText>
            <Balancer>
              <RedSpan>*</RedSpan> do you give us consent to use this childs
              name and / or image for use in our newsletters / social media etc?
            </Balancer>
          </WhiteShadowText>

          <BlackHr />

          <Label>
            yes
            <input
              type="radio"
              name="consent"
              value="yes"
              onChange={handleAddChildInfoChange}
            />
          </Label>

          <BlackHr />

          <Label>
            no
            <input
              className="red"
              type="radio"
              name="consent"
              value="no"
              onChange={handleAddChildInfoChange}
            />
          </Label>
          <BlackHr />
        </RadioDiv>

        <Label>medical info:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="medicalInfo"
          onChange={handleAddChildInfoChange}
          value={medicalInfo || ""}
          placeholder={leaveBlankIfNothingToAdd}
        />

        <Label>dietry requirements:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="dietryRequirements"
          onChange={handleAddChildInfoChange}
          value={dietryRequirements || ""}
          placeholder={leaveBlankIfNothingToAdd}
        />

        <Label>additional info:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="additionalInfo"
          onChange={handleAddChildInfoChange}
          value={additionalInfo || ""}
          placeholder={anyOtherInfo}
        />

        <AddChildInfoButton />
      </Form>
    </ParentDiv>
  );
};

export default AddChildInfoForm;
