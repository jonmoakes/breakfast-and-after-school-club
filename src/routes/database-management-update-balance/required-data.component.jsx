import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";

const RequiredData = () => (
  <ul>
    <BlackHr />

    <li>
      <BlackSpan>the</BlackSpan>
      <br />
      document id
    </li>
    <BlackHr />

    <li>
      <BlackSpan>the</BlackSpan>
      <br />
      amount to add
    </li>
    <BlackHr />
  </ul>
);

export default RequiredData;
