import { PDFDownloadLink } from "@react-pdf/renderer";
import BookingPdf from "../../components/booking-pdf/booking-pdf.component";

import useCheckDateAndGoToCancelBookingRoute from "./booked-sessions-user-hooks/use-check-date-and-go-to-cancel-booking-route";

import { ParentDiv, TableEditsButtonDiv } from "../../styles/div/div.styles";
import {
  DownloadPdfButton,
  RemoveEntryButton,
} from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

const CancelBookingAndDownloadPdfButtons = ({ chosenEntry }) => {
  const { checkDateAndGoToCancelBookingRoute } =
    useCheckDateAndGoToCancelBookingRoute(chosenEntry);

  const { $createdAt, $id, childrensName, formattedDate, sessionType } =
    chosenEntry[0] || {};

  const dataToSend = {
    $createdAt,
    $id,
    childrensName,
    formattedDate,
    sessionType,
  };
  return (
    <>
      {chosenEntry.length === 1 ? (
        <TableEditsButtonDiv>
          <RemoveEntryButton onClick={checkDateAndGoToCancelBookingRoute}>
            cancel booking
          </RemoveEntryButton>

          <PDFDownloadLink
            document={<BookingPdf {...{ dataToSend }} />}
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
