import { Label, StyledInput } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const ChildAge = ({ handleUpdatedChildInfoChange, age }) => (
  <>
    <Label>
      <RedSpan>* </RedSpan>edit Child Age:
    </Label>
    <StyledInput
      onWheel={(e) => e.target.blur()}
      type="number"
      inputMode="numeric"
      name="age"
      onChange={handleUpdatedChildInfoChange}
      defaultValue={age}
    />
  </>
);

export default ChildAge;
