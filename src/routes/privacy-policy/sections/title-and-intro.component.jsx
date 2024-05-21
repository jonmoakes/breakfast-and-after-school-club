import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";
import { Text } from "../../../styles/p/p.styles";

const TitleAndIntro = () => (
  <>
    <ParentDiv>
      <BlackTitle>privacy policy</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>
        We are committed to protecting your privacy and ensuring the security of
        your personal information.
      </Text>
      <Text>
        This Privacy Policy explains how we collect, use, disclose, and protect
        your data when you use our app.
      </Text>
      <Text>
        the app is designed to help schools manage their breakfast and after
        school clubs and allows parents to make and cancel bookings, and add or
        delete child information that the school club may need in order to look
        after their children safely.
      </Text>
    </ParentDiv>
  </>
);

export default TitleAndIntro;
