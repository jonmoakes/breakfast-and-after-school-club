import { Label, StyledTextArea } from "../../../styles/form/form.styles";

const DietryRequirements = ({
  handleUpdatedChildInfoChange,
  dietryRequirements,
}) => (
  <>
    <Label>edit dietaryrequirements:</Label>
    <StyledTextArea
      className="small-bottom-margin"
      type="text"
      name="dietryRequirements"
      onChange={handleUpdatedChildInfoChange}
      defaultValue={dietryRequirements}
    />
  </>
);

export default DietryRequirements;
