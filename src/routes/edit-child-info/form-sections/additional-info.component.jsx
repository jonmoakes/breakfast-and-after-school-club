import { Label, StyledTextArea } from "../../../styles/form/form.styles";

const AdditionalInfo = ({ handleUpdatedChildInfoChange, additionalInfo }) => (
  <>
    <Label>edit additional info:</Label>
    <StyledTextArea
      className="small-bottom-margin"
      type="text"
      name="additionalInfo"
      onChange={handleUpdatedChildInfoChange}
      defaultValue={additionalInfo}
    />
  </>
);

export default AdditionalInfo;
