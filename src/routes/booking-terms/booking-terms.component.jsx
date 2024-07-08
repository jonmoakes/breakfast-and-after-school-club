import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const BookingTerms = () => {
  const { bookingTermsLink } = useGetCurrentUserSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>booking terms</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>
          please tap the red link to view our booking terms & conditions.
        </Text>
        <Text>
          <a className="red" href={bookingTermsLink}>
            view booking terms and conditions
          </a>
        </Text>
      </ParentDiv>
    </Container>
  );
};

export default BookingTerms;
