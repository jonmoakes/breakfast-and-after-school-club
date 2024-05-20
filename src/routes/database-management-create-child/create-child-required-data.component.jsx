import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan, RedSpan } from "../../styles/span/span.styles";
import { StyledUnorderedList, BlueListItem } from "../../styles/ul/ul.styles";

const CreateChildRequiredData = () => (
  <StyledUnorderedList>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>
        <RedSpan>*</RedSpan>the childs name
      </BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>
        <RedSpan>*</RedSpan>the childs age
      </BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>
        <RedSpan>*</RedSpan>the image / video consent choice ( for school
        newsletters etc )
      </BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>the childs medical info</BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>the childs dietry requirements</BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>any additional info</BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>
        <RedSpan>*</RedSpan>the parents name
      </BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>
        <RedSpan>*</RedSpan>the parents email
      </BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>
        <RedSpan>*</RedSpan>the parents phone number
      </BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>
        <RedSpan>*</RedSpan>the parents user id
      </BlackSpan>
    </BlueListItem>
    <BlackHr />
  </StyledUnorderedList>
);

export default CreateChildRequiredData;
