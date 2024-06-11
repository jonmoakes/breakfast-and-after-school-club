import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { allUsersRoute } from "../../strings/routes/routes-strings";

const RequiredData = ({ errorId }) => (
  <>
    <StyledUnorderedList>
      <BlackHr />

      <BlueListItem>
        <BlackSpan>the</BlackSpan>
        <br />
        {errorId ? "document id" : "the parents user id"}
      </BlueListItem>
      <BlackHr />

      <BlueListItem>
        <BlackSpan>the</BlackSpan>
        <br />
        amount to add
      </BlueListItem>
      <BlackHr />
    </StyledUnorderedList>
    {!errorId ? (
      <>
        <Text>
          you can find the parents user id in your{" "}
          <StyledLink to={allUsersRoute}>users list</StyledLink>
        </Text>
        <Text>
          please consider copy and pasting the value in order to avoid errors.
        </Text>
      </>
    ) : null}
  </>
);

export default RequiredData;
