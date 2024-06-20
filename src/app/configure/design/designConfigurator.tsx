'use client';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {Rnd} from "react-rnd"
import HandleComponent from "@/components/HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import {RadioGroup} from "@headlessui/react"
import { useState } from "react";
import { COLORS, FINISHES, MATERIALS, MODELS } from "@/validators/option-validators";
import {Label} from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";


type DesignConfiguratorprops = {
  configId: string;
  imageUrl: string;
  ImageDimensions: { width: number; height: number };
};
export default function DesignConfigurator({
  configId,
  imageUrl,
  ImageDimensions,
}: DesignConfiguratorprops) {

  const [options, setOptions] = useState<{
    color:(typeof COLORS)[number];
    model: (typeof MODELS.options)[number];
    material: (typeof MATERIALS.options)[number];
    finish: (typeof FINISHES.options)[number]
  }>({
    color: COLORS[0],
    model: MODELS.options[0],
    material:MATERIALS.options[0],
    finish: FINISHES.options[0],
  })
  return (
    <div className=" relative mt-20 grid grid-cols-3 mb-20 pb-20">
      <div className="relative h-[73.5rem] overflow-hidden col-span-2 w-full max-w-4xl  flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary  focus: ring-offdet">
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
          <AspectRatio
            ratio={896 / 1831}
            className=" pointer-events-none relative  z-50 aspect-[896/1831] w-full"
          >
            <Image
              fill
              alt="phone image"
              src="/images/phone-template.png"
              className=" pointer-events-none z-50 select-none"
            />
          </AspectRatio>
          <div className="absolute inset-0 z-40 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.3)]" />
          <div
            className={cn(
              " absolute inset-0  left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
              `bg-${options.color.tw}`
            )}
          />
        </div>
        <Rnd default={{
            x: 150,
            y: 205,
            height: ImageDimensions.height/4,
            width: ImageDimensions.width/4
        }}
        className=" absolute z-20 border-[3px] border-primary"
         lockAspectRatio
        resizeHandleComponent={{
            bottomRight:<HandleComponent />,
            bottomLeft:<HandleComponent />,
            topRight:<HandleComponent />,
            topLeft:<HandleComponent />,
        }}
        >
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            fill
            alt="your image"
            className=" pointer-events-none z-50"
          />
        </div>
        </Rnd>
      </div>

      <div className=" h-[37.5rem] flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div aria-hidden='true' className=" absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none" />

          <div className=" px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl ">Customize your case</h2>
            <div className=" w-full h-px bg-zinc-200 my-6" />
            <div className="relative mt-4 h-full flex flex-col justify-between">
              <div className=" flex flex-col gap-6">
              <RadioGroup
               value={options.color}
                onChange={(val) => {
                  setOptions((prev) =>({
                ...prev,
                color: val,
               }))

              }}>
                <Label>Color: {options.color.label}</Label>
                <div className="mt-3 flex items-center space-x-3">
                  {
                    COLORS.map((color) =>(
                      <RadioGroup.Option key={color.label} value={color} className={({active, checked}) =>cn(" relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-separate", {
                        [`border-${color.tw}`]: active || checked,
                      })
                    }>
                      <span className={cn(`bg-${color.tw}`, " h-8 w-8 rounded-full boeder-black border-opacity-10 ")}></span>
                      </RadioGroup.Option>
                    ))
                  }
                </div>

              </RadioGroup>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Model</Label>
                    <DropdownMenu >
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" role="combobox" className=" w-full justify-between">
                          {options.model.label}
                          <ChevronsUpDown  className=" ml-2 h-4 w-4 shrink-0 opacity-50"/>
                          <DropdownMenuContent>
                            {
                              MODELS.options.map((model) =>(
                                <DropdownMenuItem key={model.label} className={cn(" flex text-sm gap-1 items-center p-1.1 cursor-default hover:bg-zinc-100", {
                                  "bg:zinc-100":
                                   model.label ===options.model.label,
                                })}
                                onClick={() => {
                                  setOptions((prev) => ({...prev, model}))
                                }}>
                                  <Check className={cn(" mr-2 h-4 w-4", 
                                    model.label === options.model.label ? "opacity-100": "opacity-0"
                                  )} />
                                  {model.label}
                                </DropdownMenuItem>
                              ))
                            }
                          </DropdownMenuContent>
                        </Button>
                      </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                  {
                    [MATERIALS, FINISHES].map(({name, options: selectableOptions}) => (
                      <RadioGroup key={name} value={options[name]} onChange={(val) => {
                        setOptions((prev) => ({
                          ...prev,
                          [name]: val,
                          // the name can be both material/ finish
                        }))
                      }}>
                        <Label>
                          {name.slice(0, 1).toUpperCase() + name.slice(1)}
                        </Label>
                        <div className=" mt-3 space-y-4 ">
                          {
                            selectableOptions.map((option) =>(
                              <RadioGroup.Option key={option.value} value={option}
                              className={({ active, checked}) =>cn(" relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between",{
                                'border-primary': active || checked,
                              })}
                              >
                                <span className=" flex items-center">
                                  <span className=" flex flex-col text-sm">
                                    <RadioGroup.Label as="span" className="font-medium text-gray-900">
                                      {option.label}
                                    </RadioGroup.Label>
                                    {option.description ? (<RadioGroup.Description as="span" className="text-gray-500">
                                      <span className=" block sm:inline">{option.description}</span>
                                    </RadioGroup.Description>): null}
                                  </span>
                                </span>
                              </RadioGroup.Option>
                            ))
                          }
                        </div>
                      </RadioGroup>
                    ))
                  }
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
