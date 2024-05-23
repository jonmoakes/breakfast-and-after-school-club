import { ParentDiv } from "../../styles/div/div.styles";
import { BlackH2 } from "../../styles/h2/h2.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import {
  termsRoute,
  privacyPolicyRoute,
  cookiesRoute,
  securityPolicyRoute,
  refundsPolicyRoute,
  dataProtectionPolicyRoute,
} from "../../strings/routes/routes-strings";

const Footer = () => (
  <ParentDiv>
    <BlackH2>legal</BlackH2>
    <StyledUnorderedList>
      <BlackHr />
      <StyledLink to={termsRoute}>
        <BlueListItem>terms & conditions</BlueListItem>
      </StyledLink>
      <BlackHr />
      <StyledLink to={privacyPolicyRoute}>
        <BlueListItem>privacy policy</BlueListItem>
      </StyledLink>
      <BlackHr />
      <StyledLink to={cookiesRoute}>
        <BlueListItem>cookie policy</BlueListItem>
      </StyledLink>
      <BlackHr />
      <StyledLink to={securityPolicyRoute}>
        <BlueListItem>security policy</BlueListItem>
      </StyledLink>
      <BlackHr />
      <StyledLink to={refundsPolicyRoute}>
        <BlueListItem>refunds</BlueListItem>
      </StyledLink>
      <BlackHr />
      <StyledLink to={dataProtectionPolicyRoute}>
        <BlueListItem>data protection</BlueListItem>
      </StyledLink>
      <BlackHr />
    </StyledUnorderedList>
  </ParentDiv>
);

export default Footer;
