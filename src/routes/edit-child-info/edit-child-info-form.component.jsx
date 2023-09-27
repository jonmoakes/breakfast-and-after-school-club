import useHandleUpdatedChildInfoChange from "./hooks/use-handle-updated-child-info-change";

import EditAndReturnButtons from "./edit-and-return-buttons.component";

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

const EditChildInfoForm = () => {
  const { updatedChildInfo, handleUpdatedChildInfoChange } =
    useHandleUpdatedChildInfoChange();

  const { childName, age, medicalInfo, dietryRequirements, additionalInfo } =
    updatedChildInfo;

  return (
    <ParentDiv>
      <Text>
        <RedSpan>* </RedSpan> = required field:
      </Text>

      <Form>
        <Label>
          <RedSpan>* </RedSpan>edit Child Name:
        </Label>
        <CapitalizedInput
          type="text"
          name="childName"
          onChange={handleUpdatedChildInfoChange}
          defaultValue={childName}
        />

        <Label>
          <RedSpan>* </RedSpan>edit Child Age:
        </Label>
        <StyledInput
          type="number"
          name="age"
          onChange={handleUpdatedChildInfoChange}
          defaultValue={age}
        />

        <Label>edit medical info:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="medicalInfo"
          onChange={handleUpdatedChildInfoChange}
          defaultValue={medicalInfo}
        />

        <Label>edit dietry requirements:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="dietryRequirements"
          onChange={handleUpdatedChildInfoChange}
          defaultValue={dietryRequirements}
        />

        <Label>edit additional info:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="additionalInfo"
          onChange={handleUpdatedChildInfoChange}
          defaultValue={additionalInfo}
        />

        <EditAndReturnButtons {...{ updatedChildInfo }} />
      </Form>
    </ParentDiv>
  );
};

export default EditChildInfoForm;
