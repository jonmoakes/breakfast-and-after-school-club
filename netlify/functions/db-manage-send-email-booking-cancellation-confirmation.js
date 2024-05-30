import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { emailOfParent, formattedDate, sessionBooked, sessionChildren } =
    JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: emailOfParent,
      TemplateAlias: "db-manage-send-email-booking-cancellation-confirmation",
      TemplateModel: {
        product_url: "https://www.breakfast-and-after-school-club.co.uk",
        product_name: "Breakfast & After School Club",
        formattedDate,
        sessionBooked,
        sessionChildren,
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
