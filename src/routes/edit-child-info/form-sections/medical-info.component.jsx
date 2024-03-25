import { Label, StyledTextArea } from "../../../styles/form/form.styles";

const MedicalInfo = ({ handleUpdatedChildInfoChange, medicalInfo }) => (
  <>
    <Label>edit medical info:</Label>
    <StyledTextArea
      className="small-bottom-margin"
      type="text"
      name="medicalInfo"
      onChange={handleUpdatedChildInfoChange}
      defaultValue={medicalInfo}
    />
  </>
);

export default MedicalInfo;
