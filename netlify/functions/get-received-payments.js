import stripe from "stripe";

export async function handler(event, context) {
  const { stripeSecretKey } = JSON.parse(event.body);

  if (!stripeSecretKey) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Secret key is required" }),
    };
  }

  const stripeClient = stripe(stripeSecretKey);

  try {
    const usersPaymentsReceived = await stripeClient.charges.list({
      limit: 100,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(usersPaymentsReceived.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
