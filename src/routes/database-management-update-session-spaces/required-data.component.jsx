import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";

const RequiredData = () => (
  <ul>
    <BlackHr />
    <li>
      <BlackSpan>the</BlackSpan>
      <br />
      Date
    </li>
    <BlackHr />
    <li>
      <BlackSpan>the</BlackSpan>
      <br />
      session type
    </li>
    <BlackHr />
    <li>
      <BlackSpan>the</BlackSpan>
      <br />
      number of children in the booking
    </li>
    <BlackHr />
  </ul>
);

export default RequiredData;
