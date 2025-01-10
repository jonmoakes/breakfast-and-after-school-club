import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { appOwnerEmail, id, newEmail } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: appOwnerEmail,
      TemplateAlias:
        "send-email-update-latest-bookings-and-childrens-parent-email",
      TemplateModel: {
        product_url: "https://breakfast-and-after-school-club.netlify.app",
        product_name: "Breakfast & After School Club",
        id,
        newEmail,
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
