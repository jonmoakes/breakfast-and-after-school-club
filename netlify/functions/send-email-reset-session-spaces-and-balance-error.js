import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const {
    appOwnerEmail,
    date,
    sessionType,
    numberOfChildrenInBooking,
    id,
    sessionPrice,
  } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: appOwnerEmail,
      TemplateAlias: "send-email-reset-session-spaces-and-balance-error",
      TemplateModel: {
        product_url: "https://breakfast-and-after-school-club.netlify.app",
        product_name: "Breakfast & After School Club",
        date,
        sessionType,
        numberOfChildrenInBooking,
        id,
        sessionPrice,
      },
    });

    return {
      statusCode: 202,
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
};
