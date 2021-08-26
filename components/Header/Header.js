import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useState } from "react"
import Hamburger from 'hamburger-react'


import { SvgLogo } from "../Svg";
import { Dropdown1, Dropdown2, Dropdown3, Dropdown4 } from "./Dropdown";


export function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [isOpen, setOpen] = useState(false)
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const onMouseEnter1 = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false);
        } else {
            setDropdown1(true);
        }
    };

    const onMouseLeave1 = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false);
        } else {
            setDropdown1(false);
        }
    }
    const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(true);
        }
    };

    const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(false);
        }
    }
    const onMouseEnter3 = () => {
        if (window.innerWidth < 960) {
            setDropdown3(false);
        } else {
            setDropdown3(true);
        }
    };

    const onMouseLeave3 = () => {
        if (window.innerWidth < 960) {
            setDropdown3(false);
        } else {
            setDropdown3(false);
        }
    }
    const onMouseEnter4 = () => {
        if (window.innerWidth < 960) {
            setDropdown4(false);
        } else {
            setDropdown4(true);
        }
    };

    const onMouseLeave4 = () => {
        if (window.innerWidth < 960) {
            setDropdown4(false);
        } else {
            setDropdown4(false);
        }
    }
    return (
        <>
            <header className="fixed w-full z-50">
                <div className="p-3 flex lg:hidden justify-between items-center">
                    <div>
                        <SvgLogo />
                    </div>
                    <div>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle >
                                <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
                            </DropdownToggle>

                            <DropdownMenu className="flex flex-col bg-white w-screen left-0 absolute">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-7 py-4  text-left">
                                                <h1 className="text-2xl ">Product</h1>
                                                <ChevronUpIcon
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } h-5 `}
                                                />
                                            </Disclosure.Button>
                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                leave="transition duration-200 ease-out"
                                            >
                                                <Disclosure.Panel className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90 bg-white">
                                                    <div>
                                                        <p className="text-xl tracking-wide">Drag & Drop Live Editor</p>
                                                        <p className="mt-3 text-xl tracking-wide">Features Index</p>
                                                        <p className="mt-3 text-xl tracking-wide">Theme Builder</p>
                                                        <p className="mt-3 text-xl tracking-wide">WooCommerce Builder</p>
                                                        <p className="mt-3 text-xl tracking-wide">Landing Page Builder</p>
                                                        <p className="mt-3 text-xl tracking-wide">Popup Builder</p>
                                                        <p className="mt-3 text-xl tracking-wide">Dynamic Content</p>
                                                        <p className="mt-3 text-xl tracking-wide">Integrations</p>
                                                        <p className="mt-3 text-xl tracking-wide">Pricing</p>
                                                        <p className="mt-3 text-xl tracking-wide">Elementor Pro</p>
                                                    </div>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-7 py-4  text-left">
                                                <h1 className="text-2xl ">Use Cases</h1>
                                                <ChevronUpIcon
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } w-5 h-5 `}
                                                />
                                            </Disclosure.Button>
                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                leave="transition duration-200 ease-out"
                                            >
                                                <Disclosure.Panel className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90 bg-white">
                                                    <div>
                                                        <p className="text-xl tracking-wide">Web Designers</p>
                                                        <p className="mt-3 text-xl tracking-wide">Developers</p>
                                                        <p className="mt-3 text-xl tracking-wide">Marketers</p>
                                                        <p className="mt-3 text-xl tracking-wide">Agencies</p>
                                                        <p className="mt-3 text-xl tracking-wide">Small Business Owners</p>
                                                        <p className="mt-3 text-xl tracking-wide">One Page Website Builder</p>
                                                        <p className="mt-3 text-xl tracking-wide">Portfolio Website Builder</p>
                                                        <p className="mt-3 text-xl tracking-wide">Funnel Builder</p>
                                                    </div>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-7 py-4  text-left">
                                                <h1 className="text-2xl ">Resources</h1>
                                                <ChevronUpIcon
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } w-5 h-5 `}
                                                />
                                            </Disclosure.Button>
                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                leave="transition duration-200 ease-out"
                                            >
                                                <Disclosure.Panel className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90 bg-white">
                                                    <div>
                                                        <p className="text-xl tracking-wide">Community Hub</p>
                                                        <p className="mt-3 text-xl tracking-wide">Getting Started</p>
                                                        <p className="mt-3 text-xl tracking-wide">Tutorials & Courses</p>
                                                        <p className="mt-3 text-xl tracking-wide">Blog</p>
                                                        <p className="mt-3 text-xl tracking-wide">Free WordPress Themes</p>
                                                        <p className="mt-3 text-xl tracking-wide">Hosting</p>
                                                        <p className="mt-3 text-xl tracking-wide">Add-Ons</p>
                                                        <p className="mt-3 text-xl tracking-wide">Developers</p>
                                                        <p className="mt-3 text-xl tracking-wide">Support</p>
                                                    </div>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-7 py-4  text-left">
                                                <h1 className="text-2xl ">Company</h1>
                                                <ChevronUpIcon
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } w-5 h-5 `}
                                                />
                                            </Disclosure.Button>
                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                leave="transition duration-200 ease-out"
                                            >
                                                <Disclosure.Panel className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90 bg-white">
                                                    <div>
                                                        <p className="text-xl tracking-wide">About Us</p>
                                                        <p className="mt-3 text-xl tracking-wide">Careers</p>
                                                        <p className="mt-3 text-xl tracking-wide">FAQs</p>
                                                        <p className="mt-3 text-xl tracking-wide">Affiliate Program</p>
                                                        <p className="mt-3 text-xl tracking-wide">Trademark</p>
                                                        <p className="mt-3 text-xl tracking-wide">Terms & Conditions</p>
                                                        <p className="mt-3 text-xl tracking-wide">Privacy Policy</p>
                                                        <p className="mt-3 text-xl tracking-wide">Contact Us</p>
                                                    </div>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                                <div className="text-xl flex flex-col h-2/6">
                                    <button className="p-5 hover:text-pinkstronge">Login</button>
                                    <button className="p-5 bg-pinkstronge text-white">Get Started</button>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className=" hidden lg:flex flex-row justify-between items-center pl-5 w-full">
                    {/* Left */}
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex space-x-7">
                            <div className="mr-10">
                                <SvgLogo />
                            </div>
                            <div
                                className="cursor-pointer"
                                onMouseEnter={onMouseEnter1}
                                onMouseLeave={onMouseLeave1}>
                                <div className="hover:text-pinkstronge">Web Creation</div>
                                {dropdown1 && <Dropdown1 />}
                            </div>
                            <div
                                className="cursor-pointer"
                                onMouseEnter={onMouseEnter2}
                                onMouseLeave={onMouseLeave2}>
                                <div className="hover:text-pinkstronge">Elementor For</div>
                                {dropdown2 && <Dropdown2 />}
                            </div>
                            <div
                                className="cursor-pointer"
                                onMouseEnter={onMouseEnter3}
                                onMouseLeave={onMouseLeave3}>
                                <div className="hover:text-pinkstronge">Resources</div>
                                {dropdown3 && <Dropdown3 />}
                            </div>
                            <div
                                className="cursor-pointer"
                                onMouseEnter={onMouseEnter4}
                                onMouseLeave={onMouseLeave4}>
                                <div className="hover:text-pinkstronge">Community</div>
                                {dropdown4 && <Dropdown4 />}
                            </div>
                            <div className="hover:text-pinkstronge cursor-pointer">Pricing</div>
                        </div>
                        {/* Right */}
                        <div className="flex space-x-5">
                            <button className="hover:text-pinkstronge">Login</button>
                            <button className="p-5 bg-pinkstronge text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
