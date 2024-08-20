"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function getPaymentStatus({
  orderId,
}: {
  orderId: string;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id || !user?.email) {
    throw new Error("You need to be logged in to view this page");
  }

  const order = await db.order.findFirst({
    where: {
      id: orderId,
      userId: user.id,
    },
    include: {
      BillingAdress: true,
      configuration: true,
      shippingAdress: true,
      user: true,
    },
  });
  console.log('hi1');
  
  if (!order) throw new Error("this order those not exist.");
  console.log('hi2', order);
  if (order.isPaid) {
      console.log('hi3');
      return order;
    } else {
      console.log('hi4');
    return false;
  }
}
