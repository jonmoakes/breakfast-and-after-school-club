import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const RequiredData = () => (
  <>
    <BlueH2>data required for this action</BlueH2>
    <Text>( you will find this information in the email ).</Text>
    <ul>
      <BlackHr />
      <li>
        <BlackSpan>the customers unique</BlackSpan>
        <br />
        user id
      </li>
      <BlackHr />
      <li>
        <BlackSpan>the</BlackSpan>
        <br />
        new email address
      </li>
      <BlackHr />
    </ul>
  </>
);

export default RequiredData;
