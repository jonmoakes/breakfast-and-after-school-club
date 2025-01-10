import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { appOwnerEmail, childrenIdsToDelete, id, email } = JSON.parse(
    event.body
  );

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: appOwnerEmail,
      TemplateAlias: "send-email-to-admin-close-account-request-breakfast",
      TemplateModel: {
        product_url: "https://breakfast-and-after-school-club.netlify.app",
        product_name: "Breakfast & After School Club",
        appOwnerEmail,
        childrenIdsToDelete,
        id,
        email,
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
