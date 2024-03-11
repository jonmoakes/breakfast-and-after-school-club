import { StyleSheet } from "@react-pdf/renderer";

import {
  customBlue,
  customYellow,
  customWhite,
  customBlack,
} from "../../styles/colors";

export const pdfStyles = StyleSheet.create({
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
