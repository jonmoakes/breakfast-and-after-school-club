import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const {
    parentEmail,
    formattedDate,
    sessionBooked,
    childrenInBooking,
    formattedSessionPrice,
  } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: parentEmail,
      TemplateAlias: "db-manage-send-email-booking-confirmation",
      TemplateModel: {
        product_url: "https://www.breakfast-and-after-school-club.co.uk",
        product_name: "Breakfast & After School Club",
        formattedDate,
        sessionBooked,
        childrenInBooking,
        formattedSessionPrice,
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
