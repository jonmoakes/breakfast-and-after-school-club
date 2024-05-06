import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";

const RequiredData = () => (
  <ul>
    <BlackHr />

    <li>
      <BlackSpan>the list of the users</BlackSpan>
      <br />
      children ids
    </li>
    <BlackHr />

    <li>
      <BlackSpan>the users unique</BlackSpan>
      <br />
      document id
    </li>
    <BlackHr />
  </ul>
);

export default RequiredData;
