import sgMail from "@sendgrid/mail";

export const handler = async (event) => {
  const { message } = JSON.parse(event.body);

  // const schoolCode = message.schoolCode;

  const data = {
    to: message.email,
    from: message.appOwnerEmail,
    subject:
      "Account Closure Info For Your BREAKFAST & AFTER SCHOOL CLUB Account",
    text: message.accountClosureEmail,
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
