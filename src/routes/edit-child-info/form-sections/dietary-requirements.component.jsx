import { Label, StyledTextArea } from "../../../styles/form/form.styles";

const DietaryRequirements = ({
  handleUpdatedChildInfoChange,
  dietaryRequirements,
}) => (
  <>
    <Label>edit dietary requirements:</Label>
    <StyledTextArea
      className="small-bottom-margin"
      type="text"
      name="dietaryRequirements"
      onChange={handleUpdatedChildInfoChange}
      defaultValue={dietaryRequirements}
    />
  </>
);

export default DietaryRequirements;
