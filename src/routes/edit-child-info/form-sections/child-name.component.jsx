import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const ChildName = ({ handleUpdatedChildInfoChange, childName }) => (
  <>
    <Label>
      <RedSpan>* </RedSpan>edit Child Name:
    </Label>
    <CapitalizedInput
      type="text"
      name="childName"
      onChange={handleUpdatedChildInfoChange}
      defaultValue={childName}
    />
  </>
);

export default ChildName;
