import { Text } from "../../../styles/p/p.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const ManagingCookies = () => (
  <ParentDiv>
    <BlueH2>managing cookies:</BlueH2>
    <Text>
      You can control and manage cookies in various ways. Please note that
      removing or blocking cookies can impact your user experience and some
      functionalities of the app may no longer be available.
    </Text>
    <Text>
      Browser Settings:
      <br />
      Most web browsers allow you to control cookies through their settings. You
      can set your browser to block or alert you about cookies, or to delete
      cookies when you close it. Check your browser’s help section to learn how
      to adjust your settings.
    </Text>
  </ParentDiv>
);

export default ManagingCookies;
