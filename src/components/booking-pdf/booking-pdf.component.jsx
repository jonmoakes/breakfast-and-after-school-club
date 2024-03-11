import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import Logo from "../../assets/logo.png";
import {
  customBlue,
  customYellow,
  customWhite,
  customBlack,
} from "../../styles/colors.js";
import { getSessionTypeString } from "../../functions/get-session-type-string.js";
import { format, parseISO } from "date-fns";

// Create styles
const styles = StyleSheet.create({
  page: {
    width: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: `${customBlue}`,
  },
  imageContainer: {
    marginTop: 30,
    width: 50,
    height: 50,
    border: `1px solid ${customBlack}`,
  },
  image: {
    width: "100%",
  },
  section: {
    margin: 0,
    padding: 10,
  },
  heading: {
    fontSize: 25,
    color: `${customWhite}`,
    textTransform: "capitalize",
    textDecoration: "underline",
    textDecorationColor: `${customWhite}`,
  },
  subHeading: {
    fontSize: 18,
    marginTop: 0,
    color: `${customYellow}`,
    textTransform: "capitalize",
    alignSelf: "center",
  },
  p: {
    fontSize: 16,
    color: `${customWhite}`,
    textTransform: "capitalize",
    alignSelf: "center",
  },
  minor: {
    color: `${customBlack}`,
    fontSize: 14,
    textTransform: "capitalize",
    alignSelf: "center",
  },
  lowercase: {
    color: `${customBlack}`,
    fontSize: 14,
    textTransform: "lowercase",
    alignSelf: "center",
  },
  hr: {
    color: `${customBlack}`,
  },
});

export const BookingPdf = ({ dataToSend }) => {
  const { $createdAt, $id, childrensName, formattedDate, sessionType } =
    dataToSend;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.imageContainer}>
          <Image src={Logo} style={styles.image} />
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>breakfast & after school club:</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeading}>your booking Info:</Text>
          <Text style={styles.hr}>_________________________</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeading}>session date:</Text>
          <Text style={styles.p}>{formattedDate}</Text>
          <Text style={styles.hr}>_________________________</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeading}>session type:</Text>
          <Text style={styles.p}>{getSessionTypeString(sessionType)}</Text>
          <Text style={styles.hr}>_________________________</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeading}>children in booking</Text>
          <Text style={styles.p}>{childrensName}</Text>
          <Text style={styles.hr}>_________________________</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeading}>Booking Id:</Text>
          <Text style={styles.p}>{$id}</Text>
          <Text style={styles.hr}>_________________________</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeading}>you booked this session on:</Text>
          <Text style={styles.p}>
            {format(parseISO($createdAt), "EEEE dd MMMM yyyy 'at' HH:mm")}
          </Text>
          <Text style={styles.hr}>_________________________</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.minor}>contact us:</Text>
          <Text style={styles.lowercase}>
            https://www.breakfast-and-after-school-club.co.uk/contact
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.minor}>
            Copyright 2024, breakfast and after school club. All rights
            reserved.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default BookingPdf;
