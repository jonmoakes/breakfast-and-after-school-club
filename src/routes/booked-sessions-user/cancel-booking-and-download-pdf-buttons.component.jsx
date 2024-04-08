import { PDFDownloadLink } from "@react-pdf/renderer";

import useBookedSessionsUserFunctions from "./booked-sessions-user-hooks/use-booked-sessions-user-functions";

import CancelIcon from "../../assets/cancel-icon.png";
import PdfIcon from "../../assets/pdf-icon.png";
import BookingPdf from "../../components/booking-pdf/booking-pdf.component";
import UncheckEntriesInfo from "../../components/tables/uncheck-entries-info.component";

import { IconButton } from "../../styles/buttons/buttons.styles";
import { Icon } from "../../styles/image/image.styles";

const CancelBookingAndDownloadPdfButtons = ({ chosenEntry }) => {
  const {
    oneEntrySelected,
    moreThanOneEntrySelected,
    checkOkToCancelAndGoToCancelBookingRoute,
    bookingIsOnADayInThePast,
  } = useBookedSessionsUserFunctions(chosenEntry);

  return (
    <>
      {oneEntrySelected() ? (
        <>
          {bookingIsOnADayInThePast() ? null : (
            <IconButton
              className="top-floating-button"
              onClick={checkOkToCancelAndGoToCancelBookingRoute}
            >
              <Icon className="top-floating-button" src={CancelIcon} />
            </IconButton>
          )}

          <PDFDownloadLink
            document={<BookingPdf {...{ chosenEntry }} />}
            filename="booking"
          >
            <IconButton className="bottom-floating-button">
              <Icon className="bottom-floating-button" src={PdfIcon} />
            </IconButton>
          </PDFDownloadLink>
        </>
      ) : moreThanOneEntrySelected() ? (
        <UncheckEntriesInfo />
      ) : null}
    </>
  );
};

export default CancelBookingAndDownloadPdfButtons;
