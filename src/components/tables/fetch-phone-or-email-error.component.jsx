import { ReloadInTableCellButton } from "../../styles/buttons/buttons.styles";
import { TableCellErrorDiv } from "../../styles/div/div.styles";
import { BlackSpan } from "../../styles/span/span.styles";

const FetchPhoneOrEmailError = ({ error }) => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <TableCellErrorDiv>
      <BlackSpan>{error}</BlackSpan>
      <br />
      <ReloadInTableCellButton onClick={reload}>
        reload & try again
      </ReloadInTableCellButton>
    </TableCellErrorDiv>
  );
};

export default FetchPhoneOrEmailError;
