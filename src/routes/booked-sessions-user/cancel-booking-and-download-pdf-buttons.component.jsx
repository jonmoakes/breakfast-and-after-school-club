import { PDFDownloadLink } from "@react-pdf/renderer";

import useBookedSessionsUserFunctions from "./booked-sessions-user-hooks/use-booked-sessions-user-functions";

import BookingPdf from "../../components/booking-pdf/booking-pdf.component";

import { ParentDiv, TableEditsButtonDiv } from "../../styles/div/div.styles";
import {
  DownloadPdfButton,
  RemoveEntryButton,
} from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

const CancelBookingAndDownloadPdfButtons = ({ chosenEntry }) => {
  const {
    oneEntrySelected,
    moreThanOneEntrySelected,
    checkOkToCancelAndGoToCancelBookingRoute,
  } = useBookedSessionsUserFunctions(chosenEntry);

  return (
    <>
      {oneEntrySelected() ? (
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
      ) : moreThanOneEntrySelected() ? (
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
