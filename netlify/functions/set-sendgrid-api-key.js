import sgMail from "@sendgrid/mail";
import { schoolCodesList } from "../../src/school-codes-list/school-codes-list";

export const setSendgridApiKey = (schoolCode) => {
  const { manorBeach } = schoolCodesList;

  switch (schoolCode) {
    case manorBeach:
      sgMail.setApiKey(process.env.VITE_MANOR_BEACH_SENDGRID_API_KEY);
      break;
    default:
      sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);
  }
};
