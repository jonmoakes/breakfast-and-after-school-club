import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { format, parseISO } from "date-fns";

import Logo from "../../assets/logo.png";

import { pdfStyles } from "./booking-pdf.styles";

import { getSessionTypeString } from "../../functions/get-session-type-string";

export const BookingPdf = ({ chosenEntry }) => {
  // checks if chosenEntry is null or undefined. If it is, it provides a default value of an empty array ([]).
  // Access first element if it exists. Use empty object if first element is undefined.

  const { $createdAt, $id, childrensName, date, sessionType } =
    (chosenEntry ?? [])[0] ?? {};

  const formattedDate = date ? format(new Date(date), "dd MMMM yyyy") : "";

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.imageContainer}>
          <Image src={Logo} style={pdfStyles.image} />
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.heading}>breakfast & after school club:</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeading}>your booking Info:</Text>
          <Text style={pdfStyles.hr}>_________________________</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeading}>session date:</Text>
          <Text style={pdfStyles.p}>{formattedDate}</Text>
          <Text style={pdfStyles.hr}>_________________________</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeading}>session type:</Text>
          <Text style={pdfStyles.p}>{getSessionTypeString(sessionType)}</Text>
          <Text style={pdfStyles.hr}>_________________________</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeading}>children in booking:</Text>
          <Text style={pdfStyles.p}>{childrensName}</Text>
          <Text style={pdfStyles.hr}>_________________________</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeading}>Booking Id:</Text>
          <Text style={pdfStyles.p}>{$id}</Text>
          <Text style={pdfStyles.hr}>_________________________</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeading}>you booked this session on:</Text>
          <Text style={pdfStyles.p}>
            {format(parseISO($createdAt), "EEEE dd MMMM yyyy 'at' HH:mm")}
          </Text>
          <Text style={pdfStyles.hr}>_________________________</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.minor}>contact us:</Text>
          <Text style={pdfStyles.lowercase}>
            https://www.breakfast-and-after-school-club.co.uk/contact
          </Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.minor}>
            Copyright 2024, breakfast and after school club. All rights
            reserved.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default BookingPdf;
