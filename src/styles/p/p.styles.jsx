import styled from "styled-components";
import { customBlack, customWhite } from "../colors";

export const Text = styled.p`
  font-size: 18px;
  color: ${customBlack};

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const WhiteText = styled(Text)`
  color: ${customWhite};
`;

export const ItalicStripeText = styled.p`
  font-style: italic;
  color: ${customBlack};
`;

export const NavLink = styled.p`
  font-size: 18px;
  padding: 0.1rem 1.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
    }
  }
`;
