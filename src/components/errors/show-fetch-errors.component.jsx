import useHandleShowError from "./errors-hooks/use-handle-show-error";

import CustomButton from "../custom-button/custom-button.component";

import { Text } from "../../styles/p/p.styles";
import { RedSpan, BlackSpan } from "../../styles/span/span.styles";
import { ErrorDiv, ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes/routes-strings";

const ShowFetchErrors = () => {
  const { showErrorHeading, errorToDisplay, showTailInfoToUser } =
    useHandleShowError();

  return (
    <>
      {errorToDisplay() ? (
        <ParentDiv>
          <Text>
            sorry, there was an error fetching data on our end that we need in
            order to <BlackSpan>{showTailInfoToUser()}</BlackSpan>
            ...
          </Text>
          <ErrorDiv>
            <Text>{showErrorHeading()}</Text>
            <Text>
              error received:
              <br />'<RedSpan>{errorToDisplay()}</RedSpan>'
            </Text>
          </ErrorDiv>

          <Text>press the 'reload page' button and then try again.</Text>
          <Text>please don't use the browsers back button.</Text>
          <Text>
            if you continue to see this error, please{" "}
            <StyledLink to={contactRoute}>contact us</StyledLink> and quote the
            error in the grey box above.
          </Text>
          <Text>we apologise for the inconvenience!</Text>

          <CustomButton onClick={() => window.location.reload()}>
            reload
          </CustomButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ShowFetchErrors;
