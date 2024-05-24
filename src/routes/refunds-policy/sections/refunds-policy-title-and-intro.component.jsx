import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const RefundsPolicyTitleAndIntro = () => {
  const { currentUser, email, appOwnerEmail } = useGetCurrentUserSelectors();

  return (
    <>
      <ParentDiv>
        <BlackTitle>refunds policy</BlackTitle>

        {currentUser && email === appOwnerEmail ? (
          <Text>
            last updated:
            <br />
            <RedSpan>24th May 2024</RedSpan>
          </Text>
        ) : null}
      </ParentDiv>

      {currentUser && email === appOwnerEmail ? (
        <ParentDiv>
          <BlueH2>Introduction</BlueH2>
          <Text>
            At breakfast and after school club, we strive to ensure that our
            users are satisfied with our services.
          </Text>
          <Text>
            This policy outlines the conditions and procedures for requesting a
            refund for services provided through our app.
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default RefundsPolicyTitleAndIntro;
