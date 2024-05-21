import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const UserAccounts = () => (
  <ParentDiv>
    <BlueH2>User accounts:</BlueH2>
    <Text>To use our app, you must create an account. </Text>
    <Text>
      You are responsible for maintaining the confidentiality of your account
      credentials and for all activities that occur under your account.
    </Text>
  </ParentDiv>
);

export default UserAccounts;
