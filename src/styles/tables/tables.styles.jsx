import styled from "styled-components";

import {
  customBlack,
  customGrey,
  customLightGreen,
  customWhite,
  customYellow,
} from "../colors";

export const TableWithStyle = styled.table`
  border-collapse: collapse;
  margin: 0px auto 200px auto;
  text-shadow: none;
  white-space: pre-line;
  width: 100%;
  /* background-color: ${customWhite}; */

  th {
    font-size: 16px;
    background-color: ${customBlack};
    padding: 20px 5px;
    border: 2px solid ${customBlack};
    width: auto;
    color: ${customBlack};
    background-color: ${customYellow};

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }

  tr {
    background-color: ${customGrey};
    &:nth-child(even) {
      background-color: ${customLightGreen};
    }
  }

  td {
    border: 3px solid ${customBlack};
    padding: 20px 10px;
    width: auto;
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 200%;
    margin: 0px auto 0px auto;
  }
`;
