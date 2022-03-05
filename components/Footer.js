import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import { data } from "../data/data"
import { FacebookSvg } from "../public/svg/FacebookSvg"
import { InstagramSvg } from "../public/svg/InstagramSvg"
import { SvgLogoPink } from "../public/svg/SvgLogoPink"
import { TwitterSvg } from "../public/svg/TwitterSvg"
import { YoutubeSvg } from "../public/svg/YoutubeSvg"

export default function Footer() {
  const { footer } = data[0].navbar[0]
  return (
    <>
      <footer className="hidden lg:flex w-screen py-5 px-14 text-white bg-pinkstronge">
        <div className="flex justify-between w-full py-10 space-x-5">
          {footer.map(({ title, navbar }) => (
            <div>
              <h1 className="text-2xl text-pinklight">{title}</h1>
              {navbar.map(({ id, title }) => (
                <div key={id}>
                  <p className="mt-8 tracking-wide">{title}</p>
                </div>
              ))}
            </div>
          ))}

          <div className="w-4/12 xl:w-3/12">
            <div>
              <SvgLogoPink />
              <p className="mt-10 w-5/6">
                Elementor is the leading website builder platform for
                professionals on WordPress. Elementor serves web professionals,
                including developers, designers and marketers, and boasts a new
                website created every 10 seconds on its platform.
              </p>
            </div>
            <div>
              <h1 className="text-pinklight text-2xl mt-10 mb-5">
                Subscribe To Our Newsletter
              </h1>
              <div className="flex w-4/6 mb-5">
                <input className="pl-3 bg-transparent border border-pinklight outline-none"></input>
                <button className="flex justify-center items-center py-3 px-5 bg-pinklight text-pinkstronge">
                  Subscribe
                </button>
              </div>
              <p>
                By entering your email, you agree to our
                <br />
                <b>Terms & Conditions and Privacy Policy.</b>
              </p>
            </div>
            <div className="flex items-center mt-16 mb-5 space-x-2">
              <FacebookSvg />
              <YoutubeSvg />
              <TwitterSvg />
              <InstagramSvg />
            </div>
            <p>© Elementor. All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* Responsive */}
      <fotter className="flex lg:hidden max-w-full text-white bg-pinkstronge">
        <div className="w-full mx-auto">
          <div className="z-20">
            {footer.map(({ title, navbar }) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-7 py-4  text-left">
                      <h1 className="text-2xl text-white">{title}</h1>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } h-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      leave="transition duration-200 ease-out"
                    >
                      {navbar.map(({ id, title }) => (
                        <Disclosure.Panel
                          key={id}
                          className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90"
                        >
                          <div>
                            <p className="text-xl tracking-wide">{title}</p>
                          </div>
                        </Disclosure.Panel>
                      ))}
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}

            <div className="pl-7 mt-3 mx-auto">
              <div>
                <SvgLogoPink />
                <p className="mt-10 w-5/6">
                  Elementor is the leading website builder platform for
                  professionals on WordPress. Elementor serves web
                  professionals, including developers, designers and marketers,
                  and boasts a new website created every 10 seconds on its
                  platform.
                </p>
              </div>
              <div>
                <h1 className="text-pinklight text-2xl mt-10 mb-5">
                  Subscribe To Our Newsletter
                </h1>
                <div className="flex mb-5">
                  <input className="pl-3 bg-transparent border border-pinklight outline-none"></input>
                  <button className="flex justify-center items-center py-3 px-5 bg-pinklight text-pinkstronge">
                    Subscribe
                  </button>
                </div>
                <p>
                  By entering your email, you agree to our
                  <br />
                  <b>Terms & Conditions and Privacy Policy.</b>
                </p>
              </div>
              <div className="flex items-center mt-16 mb-5 space-x-2">
                <FacebookSvg />
                <YoutubeSvg />
                <TwitterSvg />
                <InstagramSvg />
              </div>
              <p>© Elementor. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </fotter>
    </>
  )
}
