import { useNavigate } from "react-router-dom";

import { ParentDiv, TableEditsButtonDiv } from "../../styles/div/div.styles";
import { EditEntryButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

import { chosenEntryChildDetailsRoute } from "../../strings/strings";

const GetChildDetailsButton = ({ chosenEntry }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(chosenEntryChildDetailsRoute, {
      state: { ...{ chosenEntry } },
    });
  };

  return (
    <>
      {chosenEntry.length === 1 ? (
        <TableEditsButtonDiv>
          <EditEntryButton onClick={handleClick}>
            view child info
          </EditEntryButton>
        </TableEditsButtonDiv>
      ) : chosenEntry.length > 1 ? (
        <ParentDiv>
          <Text>please select just one entry.</Text>
          <Text>
            uncheck entries by tapping the checkboxes on the left of the table.
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default GetChildDetailsButton;
