const postmark = require("postmark");
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const {
    email,
    usersName,
    formattedDate,
    sessionBooked,
    kidsInBooking,
    fundsToDeduct,
    balanceRemaining,
  } = JSON.parse(event.body);

  try {
    const response = await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: email,
      TemplateAlias: "send-booking-confirmation",
      TemplateModel: {
        product_url: "https://www.breakfast-and-after-school-club.co.uk",
        product_name: "Breakfast & After School Club",
        usersName: usersName,
        formattedDate: formattedDate,
        sessionBooked: sessionBooked,
        kidsInBooking: kidsInBooking,
        fundsToDeduct: fundsToDeduct,
        balanceRemaining: balanceRemaining,
      },
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

// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

// export const handler = async (event) => {
//   const { email, subject, message } = JSON.parse(event.body);

//   const data = {
//     to: email,
//     from: process.env.VITE_APP_ADMIN_EMAIL,
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
