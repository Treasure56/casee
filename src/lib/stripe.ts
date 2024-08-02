import Stripe from "stripe"
export const stripe =new Stripe(process.env.STRIPE_SECRET_KE ?? "",{
    apiVersion: "2024-06-20",
    typescript: true,
})