import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { sendTo, name, email, message } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: sendTo,
      TemplateAlias: "send-contact-form-message-breakfast",
      TemplateModel: {
        product_url: "https://breakfast-and-after-school-club.netlify.app",
        product_name: "Breakfast & After School Club",
        name,
        email,
        message,
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
