import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import {
  cookiesRoute,
  privacyPolicyRoute,
  termsRoute,
} from "../../../strings/routes/routes-strings";

import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import {
  BlueListItem,
  StyledUnorderedList,
} from "../../../styles/ul/ul.styles";

const ReadBeforeSigningUp = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      <Text>before signing up, please make sure that you have read our:</Text>
      <StyledUnorderedList>
        <BlackHr />
        <BlueListItem
          className="clickable"
          onClick={() => hamburgerHandlerNavigate(termsRoute)}
        >
          terms & conditions
        </BlueListItem>
        <BlackHr />
        <BlueListItem
          className="clickable"
          onClick={() => hamburgerHandlerNavigate(privacyPolicyRoute)}
        >
          privacy policy
        </BlueListItem>
        <BlackHr />

        <BlueListItem
          className="clickable"
          onClick={() => hamburgerHandlerNavigate(cookiesRoute)}
        >
          cookies policy
        </BlueListItem>
        <BlackHr />
      </StyledUnorderedList>

      <Text>
        <RedSpan>* </RedSpan> = required field:
      </Text>
    </>
  );
};

export default ReadBeforeSigningUp;
