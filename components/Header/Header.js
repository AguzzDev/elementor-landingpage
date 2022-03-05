import Hamburger from "hamburger-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { Dropdown } from "./Dropdown"
import { SvgLogo } from "../../public/svg/SvgLogo"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import { data } from "../../data/data"

export const Header = () => {
  const { navMobile } = data[0].navbar[0]

  return (
    <>
      <div
        className="fixed top-0 hidden lg:flex flex-row justify-between items-center pl-5 bg-white w-full"
        style={{ zIndex: 9999 }}
      >
        {/* Left */}
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex space-x-7">
            <div className="mr-10">
              <SvgLogo />
            </div>

            <Dropdown title="Web Creation" value="header1" />
            <Dropdown title="Elementor For" value="header2" />
            <Dropdown title="Resources" value="header3" />
            <Dropdown title="Community" value="header4" />

            <div className="hover:text-pinkstronge cursor-pointer font-bold">
              Pricing
            </div>
          </div>
          {/* Right */}
          <div className="flex space-x-5">
            <button className="hover:text-pinkstronge font-bold">Login</button>
            <button className="p-5 bg-pinkstronge text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="flex items-center justify-between lg:hidden fixed top-0 bg-white w-full p-5"
        style={{ zIndex: 9999 }}
      >
        <SvgLogo />
        <>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Hamburger />
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="absolute left-5 top-0 bg-white w-screen">
              {navMobile.map(({ title, navbar }, i) => (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <>
                        <Disclosure.Button
                          key={i}
                          className="flex justify-between w-full px-7 py-4  text-left"
                        >
                          <h1 className="text-2xl">{title}</h1>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } h-5 `}
                          />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          leave="transition duration-200 ease-out"
                        ></Transition>
                        {navbar.map(({ title, id }) => (
                          <Disclosure.Panel
                            key={id}
                            className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90 bg-white"
                          >
                            <div>
                              <p className="text-xl tracking-wide">{title}</p>
                            </div>
                          </Disclosure.Panel>
                        ))}
                      </>
                    </>
                  )}
                </Disclosure>
              ))}
              <div className="text-xl flex flex-col h-2/6">
                <button className="p-5 hover:text-pinkstronge">Login</button>
                <button className="p-5 bg-pinkstronge text-white">
                  Get Started
                </button>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </>
      </div>
    </>
  )
}
