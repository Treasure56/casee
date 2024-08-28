import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const  formatPrice =(price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  return formatter.format(price)
}


export function constructMetadata({
  title = "Casee - custom high-quality phone cases",
  description = "Design and create custom high-quality phone cases in seconds | Personalized phone accessories | Unique phone covers "
}:{
  title?: string
  description?: string
} = {}): Metadata {
  return{
    title,
    description,
    openGraph: {
    title,
    description
    },
    // twitter:{
    //   card: "Summary_large_image",
    //   title,
    //   description,
    //   creator: "Simplicity Treasure"
    // }
  }
}
