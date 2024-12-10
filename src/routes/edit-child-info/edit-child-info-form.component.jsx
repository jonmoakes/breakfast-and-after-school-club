import useHandleUpdatedChildInfoChange from "./hooks/use-handle-updated-child-info-change";

import ChildName from "./form-sections/child-name.component";
import ChildAge from "./form-sections/child-age.component";
import Consent from "./form-sections/consent.component";
import MedicalInfo from "./form-sections/medical-info.component";
import DietaryRequirements from "./form-sections/dietary-requirements.component";
import AdditionalInfo from "./form-sections/additional-info.component";
import ConfirmAndCancelButtons from "./form-sections/confirm-and-cancel-buttons.component";

import { Form } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const EditChildInfoForm = () => {
  const { updatedChildInfo, handleUpdatedChildInfoChange } =
    useHandleUpdatedChildInfoChange();

  const { childName, age, medicalInfo, dietaryRequirements, additionalInfo } =
    updatedChildInfo || {};

  return (
    <ParentDiv>
      <Text>
        <RedSpan>* </RedSpan> = required field:
      </Text>

      <Form>
        <ChildName {...{ handleUpdatedChildInfoChange, childName }} />
        <ChildAge {...{ handleUpdatedChildInfoChange, age }} />
        <Consent {...{ handleUpdatedChildInfoChange }} />
        <MedicalInfo {...{ handleUpdatedChildInfoChange, medicalInfo }} />
        <DietaryRequirements
          {...{ handleUpdatedChildInfoChange, dietaryRequirements }}
        />
        <AdditionalInfo {...{ handleUpdatedChildInfoChange, additionalInfo }} />
        <ConfirmAndCancelButtons {...{ updatedChildInfo }} />
      </Form>
    </ParentDiv>
  );
};

export default EditChildInfoForm;
