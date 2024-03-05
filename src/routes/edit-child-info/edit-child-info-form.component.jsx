import Balancer from "react-wrap-balancer";

import useHandleUpdatedChildInfoChange from "./hooks/use-handle-updated-child-info-change";

import EditAndReturnButtons from "./edit-and-return-buttons.component";

import {
  Form,
  StyledInput,
  CapitalizedInput,
  StyledTextArea,
  Label,
} from "../../styles/form/form.styles";
import { RedSpan, LightGreenSpan } from "../../styles/span/span.styles";
import { ParentDiv, RadioDiv } from "../../styles/div/div.styles";
import { Text, WhiteShadowText } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { useSelector } from "react-redux";
import { selectEditChildInfoSelectors } from "../../store/edit-child-info/edit-child-info.slice";

const EditChildInfoForm = () => {
  const { updatedChildInfo, handleUpdatedChildInfoChange } =
    useHandleUpdatedChildInfoChange();

  const { childToEditInfo } = useSelector(selectEditChildInfoSelectors);

  const { childName, age, medicalInfo, dietryRequirements, additionalInfo } =
    updatedChildInfo;

  const { consent = "" } = childToEditInfo || {};

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

        <BlackHr />
        <RadioDiv>
          <WhiteShadowText>
            <Balancer>
              <RedSpan>*</RedSpan> consent for name / image use:
              <br />( current selecton:{" "}
              {consent === "yes" ? (
                <LightGreenSpan>{consent}</LightGreenSpan>
              ) : (
                <RedSpan className="capitalised">{consent}</RedSpan>
              )}{" "}
              )
            </Balancer>
          </WhiteShadowText>

          <BlackHr />

          <Label>
            yes
            <input
              type="radio"
              name="consent"
              value="yes"
              onChange={handleUpdatedChildInfoChange}
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
              onChange={handleUpdatedChildInfoChange}
            />
          </Label>
          <BlackHr />
        </RadioDiv>

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
