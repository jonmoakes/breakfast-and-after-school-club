import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan } from "../../../styles/span/span.styles";

const UserRights = () => (
  <ParentDiv>
    <BlueH2>User Rights:</BlueH2>
    <Text>
      You have the right to access the personal information we hold about you
      and your children.
    </Text>
    <Text>
      You can request corrections to any inaccurate or incomplete information.
    </Text>
    <Text>
      You can request the deletion of your or your children’s personal
      information.
    </Text>
    <Text>
      You can request restrictions on the processing of your data under certain
      circumstances.
    </Text>
    <Text>
      You have the right to request a copy of your data in a structured,
      commonly used, and machine-readable format.
    </Text>
    <Text>
      To exercise any of these rights, please contact us at:
      <br />
      <br />
      <LowercasedSpan>
        admin@breakfast-and-after-school-club.co.uk
      </LowercasedSpan>
    </Text>
  </ParentDiv>
);

export default UserRights;
