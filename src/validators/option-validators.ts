import { PRODUCT_PRICES } from "@/config/product"

// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-slate-950 border-slate-950
// bg-yellow-950 border-yellow-950
// bg-yellow-800 border-yellow-800




export const COLORS = [
  { label: "Black", value: "charcoal", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "obara obara", tw: "rose-950" },
  { label: "slate", value: "slate", tw: "slate-950" },
  { label: "yellow", value: "yellow", tw: "yellow-950" },
  { label: "yelloww", value: "yellow owolowo", tw: "yellow-800" },
] as const 


export const MODELS ={
  name: "models",
  options: [
    {
      label: "Iphone x",
      value: 'Iphonex'
    },
    {
      label: "Iphone 11",
      value: 'Iphone11'
    },
    {
      label: "Iphone 12",
      value: 'Iphone12'
    },
    {
      label: "Iphone 13",
      value: 'Iphone13'
    },
    {
      label: "Iphone 14",
      value: 'Iphone14'
    },
    {
      label: "Iphone 15",
      value: 'Iphone15'
    },
   
  ]
} as const

export const MATERIALS = {
  name: "material",
  options:[
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone
    },
    {
      label: "Sof polycaebonate",
      value: "polycarbonate",
      description: " Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate
    }
  ]

} as const
export const FINISHES = {
  name: "finish",
  options:[
    {
      label: "Smooth finish ",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth
    },
    {
      label: "Texture finish",
      value: "texture",
      description: " soft grippy texture",
      price: PRODUCT_PRICES.finish.textured
    }
  ]

} as const