import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlueSpan, RedSpan } from "../../../styles/span/span.styles";

import {
  accountRoute,
  bookingTermsRoute,
} from "../../../strings/routes/routes-strings";
import { StyledLink } from "../../../styles/link/link.styles";

const AgreeToTerms = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const agreeChecked = localStorage.getItem("agreeChecked");

  const confirmAgree = () => {
    localStorage.setItem("agreeChecked", true);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <>
      {!agreeChecked ? (
        <ParentDiv>
          <Text>
            please tap the button below to confirm that you agree to our{" "}
            <BlueSpan
              className="clickable"
              onClick={() => hamburgerHandlerNavigate(bookingTermsRoute)}
            >
              booking terms and conditions
            </BlueSpan>
            .
          </Text>
          <Text>
            if you confirm, your agreement will be saved until you sign out on
            this device so that you don't have to do this each time.
          </Text>
          <Text>
            you can review the booking terms and conditions at any time from
            your <StyledLink to={accountRoute}>account</StyledLink> page.
          </Text>
          <Text>
            when there, scroll down the page until you see the '
            <RedSpan>booking T&Cs</RedSpan>' button.
          </Text>
          <YellowGreenButton onClick={confirmAgree}>i agree</YellowGreenButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AgreeToTerms;
