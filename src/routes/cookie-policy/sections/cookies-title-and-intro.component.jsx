import { Text } from "../../../styles/p/p.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";

const CookiesTitleAndIntro = () => (
  <>
    <ParentDiv>
      <BlackTitle>cookie policy</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>
        Our app uses cookies, local storage and similar technologies to enhance
        your experience, improve our services, and understand how users interact
        with our app.
      </Text>
      <Text>
        This Cookie Policy explains what cookies are, how we use them, and how
        you can control them.
      </Text>
    </ParentDiv>
  </>
);

export default CookiesTitleAndIntro;
