import styled from "styled-components";

import { customBlack, customBlue, customWhite, customYellow } from "../colors";

export const Button = styled.button`
  min-width: 165px;
  width: 250px;
  height: 50px;
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
  text-transform: capitalize;
  color: ${customBlack};
  background-color: ${customYellow};
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${customBlack};
  transition: all 0.2s ease-in-out;
  outline: none;
  margin: 20px auto;

  &:hover {
    transform: scale(1.05);
    color: ${customWhite};
    background-color: ${customBlue};
    text-shadow: 0.5px 0.5px 0.5px ${customBlack};

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
      text-shadow: none;

      &:hover {
        color: ${customBlack};
        background-color: ${customYellow};
      }
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 0 0.1rem ${customBlack};
  }

  @media screen and (max-width: 1366px) {
    /* margin: 10px; */
  }
`;
