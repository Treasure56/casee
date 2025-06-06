"use client";

import { useQuery } from "@tanstack/react-query";
import getPaymentStatus from "./actions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import PhonePreview from "@/components/ui/PhonePreview";
import { formatPrice } from "@/lib/utils";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "";
  const { data } = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  });
  if (data == undefined) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl"> loading your order...</h3>
          <p>This won&apos;t take long.</p>
        </div>
      </div>
    );
  }

  if (data === false) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Verifying your payment...</h3>
          <p>This might take a moment.</p>
        </div>
      </div>
    );
  }

  const { configuration, BillingAdress, shippingAdress, amount } = data;
  const { color } = configuration;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl ">
          <p className="text-base font-medium text-primary">
            Thank you for your order!
          </p>
          <h1 className="mt-2 txt-4xl font-bold tracking-tight sm:text-5xl">
            Your case is on the way!
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            We&apos;ve received your order and will begin processing it shortly.
          </p>

          <div className="mt-12 text-sm font-medium">
            <p className="text-zinc-900">Order number</p>
            <p className="mt-2 text-zinc-500">{orderId}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200">
          <div className="mt-10 flex flex-auto flex-col">
            <h4 className="font-semibold text-zinc-900">You made a great choice</h4>
            <p className="mt-2 text-sm text-zinc-600">
            At Casee, we believe a phone case should not only look great but also stand the test of time. That&apos;s why we offer a 5-year print guarantee. If your case doesn&apos;t meet the highest quality standards, we&apos;ll replace it for free
            </p>
          </div>
        </div>

        <div className="flex space-x-6 overflow-hidden mt-4 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
        <PhonePreview croppedImageUrl={configuration.cropedImageUrl!} color={color!} />
        </div>
        <div>
          <div className=" grid grid-cols-2 gap-x-6 py-6 text-sm">
            <div>
              <p className=" font-medium text-gray-900 ">
                Shipping address
              </p>
              <div className="mt-2 text-zinc-700">
                <address className=" not-italic">
                  <span className=" block">{shippingAdress?.name}</span>
                  <span className=" block">{shippingAdress?.street}</span>
                  <span className=" block">{shippingAdress?.postalCode} {shippingAdress?.city}</span>
                </address>
              </div>
            </div>
            <div>
              <p className=" font-medium text-gray-900 ">
                Billing address
              </p>
              <div className="mt-2 text-zinc-700">
                <address className=" not-italic">
                  <span className=" block">{BillingAdress?.name}</span>
                  <span className=" block">{BillingAdress?.street}</span>
                  <span className=" block">{BillingAdress?.postalCode} {BillingAdress?.city}</span>
                </address>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 border-t border-zinc-200 py-16 text-sm">
            <div>
              <p className=" font-medium text-zinc-900">Payment status</p>
              <p className=" mt-2 text-zinc-700">Paid</p>
            </div>
            <div>
              <p className=" font-medium text-zinc-900">Shipping method</p>
              <p className=" mt-2 text-zinc-700">DHL, takes up to 3 working days</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-zinc-200 pt-10 text-sm">
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Subtotal</p>
            <p className=" text-zinc-700">{formatPrice(amount)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Shipping</p>
            <p className=" text-zinc-700">{formatPrice(0)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Total</p>
            <p className=" text-zinc-700">{formatPrice(amount)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
