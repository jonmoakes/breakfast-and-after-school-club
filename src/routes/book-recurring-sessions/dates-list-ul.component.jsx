import { format } from "date-fns";
import { BlackHr } from "../../styles/hr/hr.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const DatesListUl = ({ dateDoc, dayChoice }) => {
  const formattedDate = format(new Date(dateDoc.date), "dd MMMM yyyy");

  return (
    <StyledUnorderedList>
      <BlueListItem>
        {dayChoice} {formattedDate}
      </BlueListItem>
      <BlackHr />
    </StyledUnorderedList>
  );
};

export default DatesListUl;
