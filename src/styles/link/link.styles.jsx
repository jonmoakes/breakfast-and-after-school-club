import styled from "styled-components";
import { Link } from "react-router-dom";

import { customBlue, customRed, customWhite } from "../colors";

export const StyledLink = styled(Link)`
  color: ${customBlue};
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: ${customRed};

    @media screen and (max-width: 1366px) {
      color: ${customBlue};
    }
  }
`;

export const WhiteStyledLink = styled(StyledLink)`
  color: ${customWhite};
`;
