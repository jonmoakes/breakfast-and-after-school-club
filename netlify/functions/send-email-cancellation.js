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
    newBalance,
  } = JSON.parse(event.body);

  try {
    const response = await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: email,
      TemplateAlias: "send-booking-cancellation-confirmation",
      TemplateModel: {
        product_url: "https://www.breakfast-and-after-school-club.co.uk",
        product_name: "Breakfast & After School Club",
        name,
        formattedDate,
        sessionBooked,
        childrensName,
        fundsAddedToWallet,
        newBalance,
      },
    });

    return {
      response,
      statusCode: 202,
      body: "Email sent successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
