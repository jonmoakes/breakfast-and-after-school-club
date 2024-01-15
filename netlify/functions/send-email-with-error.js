// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

// export const handler = async (event) => {
//   const { appOwnerEmail, appAdminEmail, subject, message } = JSON.parse(
//     event.body
//   );

//   const data = {
//     to: appOwnerEmail,
//     from: appAdminEmail,
//     subject,
//     text: message,
//   };

//   try {
//     await sgMail.send(data);
//     return {
//       statusCode: 202,
//       body: "Email sent successfully",
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };

const postmark = require("postmark");
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { appOwnerEmail, subject, message } = JSON.parse(event.body);

  try {
    const response = await client.sendEmail({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: appOwnerEmail,
      Subject: subject,
      TextBody: message,
    });

    return {
      response,
      statusCode: 202,
      body: "Email sent successfully",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
