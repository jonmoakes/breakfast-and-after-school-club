import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";

const CreateUserRequiredData = () => (
  <ul>
    <BlackHr />

    <li>
      <BlackSpan>the customers name</BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>their email address</BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>their phone number</BlackSpan>
    </li>
    <BlackHr />
  </ul>
);

export default CreateUserRequiredData;
