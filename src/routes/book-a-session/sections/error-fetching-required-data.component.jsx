import CustomButton from "../../../components/custom-button/custom-button.component";
import ErrorFetchingRequiredDateDataInfo from "../../../components/errors/error-fetching-required-date-data-info.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { contactRoute } from "../../../strings/strings";

const ErrorFetchingRequiredData = () => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <ParentDiv>
      <Text>
        sorry, there was an error fetching data from the database which we need
        in order to make your booking.
      </Text>
      <Text>please try reloading the page by tapping the button below.</Text>
      <Text>
        if you continue to see this error, please{" "}
        <StyledLink to={contactRoute}>contact us</StyledLink> and quote the
        following error:
      </Text>

      <ErrorFetchingRequiredDateDataInfo />

      <Text>we apologise for the inconvenience!</Text>
      <CustomButton onClick={reload}>reload page</CustomButton>
    </ParentDiv>
  );
};

export default ErrorFetchingRequiredData;
