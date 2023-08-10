import { config } from "dotenv";
import stripe from "stripe";

config(); // Load environment variables from .env file

const stripeKey = stripe(process.env.VITE_STRIPE_SECRET_KEY);

export const handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripeKey.paymentIntents.create({
      amount,
      currency: "gbp",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
