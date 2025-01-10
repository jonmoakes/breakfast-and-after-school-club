import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const {
    email,
    name,
    formattedDate,
    sessionBooked,
    childrensName,
    fundsAddedToWallet,
  } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: email,
      TemplateAlias: "send-email-booking-cancellation-confirmation",
      TemplateModel: {
        product_url: "https://breakfast-and-after-school-club.netlify.app",
        product_name: "Breakfast & After School Club",
        name,
        formattedDate,
        sessionBooked,
        childrensName,
        fundsAddedToWallet,
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
