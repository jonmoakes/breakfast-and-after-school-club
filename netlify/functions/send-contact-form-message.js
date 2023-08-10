import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

export const handler = async (event) => {
  const { message } = JSON.parse(event.body);

  const data = {
    to: process.env.VITE_APP_OWNER_EMAIL,
    from: process.env.VITE_APP_OWNER_EMAIL,
    subject: "Message From BREAKFAST & AFTER SCHOOL CLUB Contact Form",
    text: message,
  };

  try {
    await sgMail.send(data);
    return {
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
