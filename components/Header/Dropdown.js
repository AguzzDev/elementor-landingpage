import { ChevronRightIcon } from "@heroicons/react/solid"
import React from "react"
import { IconNoColor } from "../Icon"
import * as HoverCard from "@radix-ui/react-hover-card"
import Svg1 from "../../public/svg/Svg1"
import Svg2 from "../../public/svg/Svg2"
import Svg3 from "../../public/svg/Svg3"
import Svg4 from "../../public/svg/Svg4"

import { data } from "../../data/data"

export const Dropdown = ({ title, value }) => {
  const dataNav = data[0].navbar[0]

  return (
    <>
      <HoverCard.Root openDelay={20} closeDelay={80}>
        <HoverCard.Trigger>
          <div className="hover:text-pinkstronge cursor-pointer font-bold">
            {title}
          </div>
        </HoverCard.Trigger>
        <HoverCard.Content
          style={{
            boxShadow: "3px 3px 0",
            width: value === "header1" || value === "header2" ? "80vw" : "65vw",
          }}
          className={`absolute ${
            value === "header1"
              ? "-left-20"
              : value === "header2"
              ? "-left-52"
              : value === "header3"
              ? "left-36"
              : "left-10"
          } flex rounded-xl border-2 border-black bg-white absolute top-4`}
        >
          <>
            {value === "header1" ? (
              <div className="flex">
                <div className="flex flex-col space-y-7 border-r-2 border-black p-10">
                  {dataNav.header1
                    .map(({ id, title }) => (
                      <button
                        key={id}
                        className="text-left flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform"
                      >
                        <h1 className="text-lg font-bold">{title}</h1>
                        <div>
                          <IconNoColor Icon={ChevronRightIcon} />
                        </div>
                      </button>
                    ))
                    .slice(0, 8)}
                </div>
                <div className="flex flex-col space-y-6 w-2/6 p-10">
                  {dataNav.header1
                    .map(({ id, title, desc }) => (
                      <button
                        key={id}
                        className="text-left hover:bg-gray-100 p-4 duration-300 transform"
                      >
                        <h1 className="text-lg font-bold">{title}</h1>
                        <p>{desc}</p>
                      </button>
                    ))
                    .slice(8)}
                </div>
                <div className="p-10">
                  <Svg1 />
                </div>
              </div>
            ) : value === "header2" ? (
              <div className="flex space-x-10 p-10">
                <div className="grid grid-cols-2 gap-10 w-3/6">
                  {dataNav.header2
                    .map(({ id, title, desc }) => (
                      <button
                        key={id}
                        className="text-left hover:bg-gray-100 p-4 duration-300 transform"
                      >
                        <h1 className="text-lg font-bold">{title}</h1>
                        <p>{desc}</p>
                      </button>
                    ))
                    .slice(0)}
                </div>
                <div className="w-3/6 pl-20">
                  <Svg2 />
                </div>
              </div>
            ) : value === "header3" ? (
              <div className="flex space-x-10 p-10">
                <div className="flex flex-col space-y-7 w-4/6">
                  {dataNav.header3
                    .map(({ id, title }) => (
                      <button
                        key={id}
                        className="text-left flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform"
                      >
                        <h1 className="text-lg font-bold">{title}</h1>
                        <div>
                          <IconNoColor Icon={ChevronRightIcon} />
                        </div>
                      </button>
                    ))
                    .slice(0)}
                </div>
                <div className="w-2/6">
                  <Svg3 />
                </div>
              </div>
            ) : (
              <div className="flex space-x-10 p-10">
                <div className="flex flex-col space-y-7 w-4/6">
                  {dataNav.header3
                    .map(({ id, title }) => (
                      <button
                        key={id}
                        className="text-left flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform"
                      >
                        <h1 className="text-lg font-bold">{title}</h1>
                        <div>
                          <IconNoColor Icon={ChevronRightIcon} />
                        </div>
                      </button>
                    ))
                    .slice(0)}
                </div>
                <div className="w-2/6">
                  <Svg4 />
                </div>
              </div>
            )}
          </>
        </HoverCard.Content>
      </HoverCard.Root>
    </>
  )
}
