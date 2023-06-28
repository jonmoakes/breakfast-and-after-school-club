import styled from "styled-components";

import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";

export const LoaderIcon = styled(LoaderSVG)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30%;
  width: 30%;
`;
