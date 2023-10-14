import styled from "styled-components";
import { customBlack, customRed, customWhite } from "../colors";

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

export const RedText = styled(Text)`
  color: ${customRed};
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

export const ErrorImageText = styled.p`
  font-size: 18px;
  color: ${customBlack};
  text-align: center;
  padding: 5px 5px 5px 5px;
`;

export const EmailLink = styled.p`
  text-transform: lowercase;
  color: ${customBlack};
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: ${customRed};

    @media screen and (max-width: 1366px) {
      text-decoration: none;
      color: ${customBlack};
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const PaginationText = styled.p`
  font-size: 16px;
  color: ${customBlack};
`;
