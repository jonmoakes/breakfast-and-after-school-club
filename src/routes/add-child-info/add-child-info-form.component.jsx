import { useSelector } from "react-redux";

import useHandleAddChildInfoChange from "./add-child-info-hooks/use-handle-add-child-info-change";

import { selectAddChildInfo } from "../../store/add-child-info/add-child-info.selector";

import {
  Form,
  StyledInput,
  CapitalizedInput,
  StyledTextArea,
  Label,
} from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

import { leaveBlankIfNothingToAdd, anyOtherInfo } from "../../strings/strings";

const AddChildInfoForm = () => {
  const { handleAddChildInfoChange } = useHandleAddChildInfoChange();

  const addChildInfo = useSelector(selectAddChildInfo);
  const { name, age, medicalInfo, dietryRequirements, additionalInfo } =
    addChildInfo;

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
          name="name"
          onChange={handleAddChildInfoChange}
          value={name || ""}
          placeholder="full name please"
        />

        <Label>
          <RedSpan>* </RedSpan>Child Age:
        </Label>
        <StyledInput
          type="number"
          name="age"
          onChange={handleAddChildInfoChange}
          value={age || ""}
        />

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
      </Form>
    </ParentDiv>
  );
};

export default AddChildInfoForm;
