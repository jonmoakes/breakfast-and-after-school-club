import { PDFDownloadLink } from "@react-pdf/renderer";

import useBookedSessionsUserLogic from "./booked-sessions-user-hooks/logic/use-booked-sessions-user-logic";

import BookingPdf from "../../components/booking-pdf/booking-pdf.component";

import { ParentDiv, TableEditsButtonDiv } from "../../styles/div/div.styles";
import {
  DownloadPdfButton,
  RemoveEntryButton,
} from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

const CancelBookingAndDownloadPdfButtons = ({ chosenEntry }) => {
  const { checkOkToCancelAndGoToCancelBookingRoute } =
    useBookedSessionsUserLogic(chosenEntry);

  return (
    <>
      {chosenEntry.length === 1 ? (
        <TableEditsButtonDiv>
          <RemoveEntryButton onClick={checkOkToCancelAndGoToCancelBookingRoute}>
            cancel booking
          </RemoveEntryButton>

          <PDFDownloadLink
            document={<BookingPdf {...{ chosenEntry }} />}
            filename="booking"
          >
            <DownloadPdfButton>download PDF</DownloadPdfButton>
          </PDFDownloadLink>
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

export default CancelBookingAndDownloadPdfButtons;
