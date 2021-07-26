import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Footer() {
    return (
        <>
            <footer className="hidden lg:flex w-screen py-5 px-14 text-white bg-pinkstronge">
                <div className="flex justify-between w-full py-10 space-x-5">
                    <div>
                        <h1 className="text-2xl text-pinklight">Product</h1>
                        <p className="mt-8 tracking-wide">Drag & Drop Live Editor</p>
                        <p className="mt-3 tracking-wide">Features Index</p>
                        <p className="mt-3 tracking-wide">Theme Builder</p>
                        <p className="mt-3 tracking-wide">WooCommerce Builder</p>
                        <p className="mt-3 tracking-wide">Landing Page Builder</p>
                        <p className="mt-3 tracking-wide">Popup Builder</p>
                        <p className="mt-3 tracking-wide">Dynamic Content</p>
                        <p className="mt-3 tracking-wide">Integrations</p>
                        <p className="mt-3 tracking-wide">Pricing</p>
                        <p className="mt-3 tracking-wide">Elementor Pro</p>
                    </div>
                    <div>
                        <h1 className="text-2xl text-pinklight">Use Cases</h1>
                        <p className="mt-8 tracking-wide">Web Designers</p>
                        <p className="mt-3 tracking-wide">Developers</p>
                        <p className="mt-3 tracking-wide">Marketers</p>
                        <p className="mt-3 tracking-wide">Agencies</p>
                        <p className="mt-3 tracking-wide">Small Business Owners</p>
                        <p className="mt-3 tracking-wide">One Page Website Builder</p>
                        <p className="mt-3 tracking-wide">Portfolio Website Builder</p>
                        <p className="mt-3 tracking-wide">Funnel Builder</p>
                    </div>

                    <div>
                        <h1 className="text-2xl text-pinklight">Resources</h1>
                        <p className="mt-8 tracking-wide">Community Hub</p>
                        <p className="mt-3 tracking-wide">Getting Started</p>
                        <p className="mt-3 tracking-wide">Tutorials & Courses</p>
                        <p className="mt-3 tracking-wide">Blog</p>
                        <p className="mt-3 tracking-wide">Free WordPress Themes</p>
                        <p className="mt-3 tracking-wide">Hosting</p>
                        <p className="mt-3 tracking-wide">Add-Ons</p>
                        <p className="mt-3 tracking-wide">Developers</p>
                        <p className="mt-3 tracking-wide">Support</p>
                    </div>
                    <div>
                        <h1 className="text-2xl text-pinklight">Company</h1>
                        <p className="mt-8 tracking-wide">About Us</p>
                        <p className="mt-3 tracking-wide">Careers</p>
                        <p className="mt-3 tracking-wide">FAQs</p>
                        <p className="mt-3 tracking-wide">Affiliate Program</p>
                        <p className="mt-3 tracking-wide">Trademark</p>
                        <p className="mt-3 tracking-wide">Terms & Conditions</p>
                        <p className="mt-3 tracking-wide">Privacy Policy</p>
                        <p className="mt-3 tracking-wide">Contact Us</p>
                    </div>
                    <div className="w-4/12 xl:w-3/12">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-pinklight" xmlnsXlink="http://www.w3.org/1999/xlink" width="163px" height="27px" viewBox="0 0 163 27"><g id="e-text"><path id="Path" d="M102.054 12.939 C102.054 12.939 100.65 13.273 99.465 13.557 L97.66 13.968 C97.655 13.968 97.647 13.968 97.645 13.968 97.645 13.482 97.68 12.969 97.796 12.497 97.946 11.891 98.274 11.183 98.842 10.872 99.461 10.534 100.216 10.494 100.872 10.756 101.551 11.025 101.861 11.68 101.995 12.359 102.032 12.548 102.058 12.738 102.075 12.931 L102.054 12.939 Z M106.756 13.966 C106.756 9.259 103.792 7.235 100.006 7.235 95.724 7.235 93.043 10.201 93.043 13.989 93.043 18.108 95.325 20.79 100.241 20.79 102.899 20.79 104.405 20.32 106.192 19.425 L105.51 16.341 C104.145 16.953 102.876 17.329 101.181 17.329 99.324 17.329 98.264 16.623 97.865 15.305 L106.638 15.305 C106.709 14.953 106.756 14.554 106.756 13.966 Z" fill="currentColor" stroke="none"></path><path id="Path-1" d="M62.925 12.939 C62.925 12.939 61.521 13.273 60.336 13.557 L58.532 13.968 C58.526 13.968 58.518 13.968 58.516 13.968 58.516 13.482 58.551 12.969 58.667 12.497 58.817 11.891 59.145 11.183 59.713 10.872 60.332 10.534 61.087 10.494 61.743 10.756 62.422 11.025 62.732 11.68 62.866 12.359 62.903 12.548 62.929 12.738 62.947 12.931 L62.925 12.939 Z M67.627 13.966 C67.627 9.259 64.663 7.235 60.877 7.235 56.595 7.235 53.914 10.201 53.914 13.989 53.914 18.108 56.196 20.79 61.112 20.79 63.77 20.79 65.276 20.32 67.063 19.425 L66.381 16.341 C65.017 16.953 63.747 17.329 62.052 17.329 60.195 17.329 59.135 16.623 58.736 15.305 L67.509 15.305 C67.58 14.953 67.627 14.554 67.627 13.966 Z" fill="currentColor" stroke="none"></path><path id="Path-2" d="M52.311 3.776 L47.967 3.776 47.967 20.32 52.311 20.32 52.311 3.776 Z" fill="currentColor" stroke="none"></path><path id="Path-3" d="M107.674 7.658 L112.238 7.658 113.198 10.583 C113.799 9.139 115.151 7.281 117.55 7.281 120.842 7.281 122.631 8.951 122.631 13.258 L122.631 20.319 118.069 20.319 C118.069 18.847 118.071 17.376 118.072 15.905 118.072 15.231 118.061 14.556 118.071 13.881 118.078 13.258 118.122 12.615 117.791 12.056 117.567 11.679 117.2 11.401 116.803 11.212 115.997 10.827 115.124 10.839 114.334 11.25 114.139 11.35 113.199 11.859 113.199 12.095 L113.199 20.319 108.637 20.319 108.637 11.075 107.674 7.658 Z" fill="currentColor" stroke="none"></path><path id="Path-4" d="M126.324 10.976 L124.23 10.976 124.23 7.658 126.324 7.658 126.324 5.583 130.886 4.509 130.886 7.658 135.472 7.658 135.472 10.976 130.886 10.976 130.886 14.695 C130.886 16.154 131.592 16.837 132.65 16.837 133.731 16.837 134.344 16.695 135.26 16.39 L135.801 19.826 C134.554 20.367 133.002 20.626 131.425 20.626 128.109 20.626 126.32 19.049 126.32 15.991 L126.32 10.976 126.324 10.976 Z" fill="currentColor" stroke="none"></path><path id="Path-5" d="M144.252 17.026 C145.921 17.026 146.91 15.826 146.91 13.895 146.91 11.964 145.968 10.858 144.323 10.858 142.652 10.858 141.689 11.964 141.689 13.966 141.689 15.848 142.631 17.026 144.252 17.026 Z M144.299 7.165 C148.581 7.165 151.708 9.847 151.708 14.013 151.708 18.202 148.581 20.72 144.252 20.72 139.947 20.72 136.889 18.131 136.889 14.013 136.891 9.847 139.926 7.165 144.299 7.165 Z" fill="currentColor" stroke="none"></path><path id="Path-6" d="M88.954 7.619 C88.146 7.287 87.232 7.163 86.361 7.288 85.917 7.353 85.483 7.481 85.08 7.68 83.975 8.227 83.112 9.472 82.648 10.583 82.345 9.304 81.459 8.152 80.165 7.619 79.357 7.287 78.443 7.163 77.573 7.288 77.128 7.353 76.694 7.481 76.291 7.68 75.188 8.225 74.327 9.466 73.863 10.573 L73.863 10.492 72.934 7.658 68.371 7.658 69.332 11.075 69.332 20.32 73.865 20.32 73.865 12.06 C73.881 11.999 74.084 11.885 74.119 11.857 74.65 11.48 75.275 11.09 75.939 11.041 76.617 10.99 77.286 11.336 77.691 11.875 77.734 11.934 77.775 11.993 77.813 12.056 78.145 12.615 78.1 13.258 78.092 13.881 78.084 14.556 78.095 15.23 78.094 15.905 78.092 17.376 78.09 18.847 78.09 20.318 L82.654 20.318 82.654 13.258 C82.654 13.222 82.654 13.187 82.654 13.151 L82.654 12.062 C82.664 12.003 82.872 11.883 82.91 11.857 83.44 11.48 84.065 11.09 84.73 11.041 85.408 10.99 86.076 11.336 86.481 11.875 86.525 11.934 86.566 11.993 86.603 12.056 86.935 12.615 86.89 13.258 86.884 13.881 86.876 14.556 86.888 15.23 86.886 15.905 86.884 17.376 86.882 18.847 86.882 20.318 L91.445 20.318 91.445 13.258 C91.443 11.189 91.146 8.522 88.954 7.619 Z" fill="currentColor" stroke="none"></path><path id="Path-7" d="M162.503 7.283 C160.105 7.283 158.752 9.141 158.151 10.585 L157.189 7.66 152.625 7.66 153.586 11.077 153.586 20.322 158.151 20.322 158.151 11.779 C158.801 11.665 162.33 12.314 163 12.56 L163 7.298 C162.837 7.289 162.672 7.283 162.503 7.283 Z" fill="currentColor" stroke="none"></path><path id="Path-8" d="M41.663 12.516 C41.663 12.516 40.26 12.851 39.074 13.134 L37.27 13.545 C37.264 13.545 37.256 13.545 37.254 13.545 37.254 13.059 37.29 12.546 37.405 12.074 37.555 11.468 37.883 10.76 38.451 10.449 39.07 10.111 39.825 10.071 40.482 10.333 41.16 10.603 41.471 11.257 41.604 11.936 41.642 12.125 41.667 12.316 41.685 12.508 L41.663 12.516 Z M46.367 13.543 C46.367 8.836 43.403 6.813 39.617 6.813 35.335 6.813 32.654 9.778 32.654 13.566 32.654 17.685 34.937 20.368 39.853 20.368 42.51 20.368 44.016 19.897 45.803 19.003 L45.121 15.919 C43.757 16.53 42.487 16.906 40.792 16.906 38.935 16.906 37.875 16.2 37.476 14.882 L46.249 14.882 C46.32 14.532 46.367 14.131 46.367 13.543 Z" fill="currentColor" stroke="none"></path></g><path fillRule="evenodd" clipRule="evenodd" d="M0 13.2084C0 20.4107 5.83624 26.2501 13.0347 26.2501C20.2332 26.2501 26.0695 20.4107 26.0695 13.2084C26.0695 6.00609 20.2332 0.166748 13.0347 0.166748C5.83624 0.166748 0 6.00609 0 13.2084ZM9.77554 7.77424H7.60342V18.6426H9.77554V7.77424ZM11.9477 7.77424H18.4641V9.94753H11.9477V7.77424ZM18.4641 12.1208H11.9477V14.2941H18.4641V12.1208ZM11.9477 16.4693H18.4641V18.6426H11.9477V16.4693Z" fill="currentColor" id="e-icon"></path></svg>
                            <p className="mt-10 w-5/6">Elementor is the leading website builder platform for professionals on WordPress. Elementor serves web professionals, including developers, designers and marketers, and boasts a new website created every 10 seconds on its platform.</p>
                        </div>
                        <div>
                            <h1 className="text-pinklight text-2xl mt-10 mb-5">Subscribe To Our Newsletter</h1>
                            <div className="flex w-4/6 mb-5">
                                <input className="bg-transparent border border-pinklight"></input>
                                <div className="flex justify-center items-center py-3 px-5 bg-pinklight text-pinkstronge">Subscribe</div>
                            </div>
                            <p>By entering your email, you agree to our<br /><b>Terms & Conditions and Privacy Policy.</b></p>
                        </div>
                        <div className="flex items-center mt-16 mb-5 space-x-2">
                            <a aria-label="Facebook" target="_blank"><svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg"><path d="M15.768 15.737H12v3.315h3.768V29h4.422v-9.948h4.42v-3.315h-4.42v-1.335c0-1.002 1.053-3.087 2.589-3.087h1.831V8h-3.868c-5.457.795-4.974 7.737-4.974 7.737z" fill="currentColor"></path></svg></a>
                            <a aria-label="Youtube" target="_blank"><svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg"><path d="M28.79 13.58s-.206-1.448-.834-2.085c-.8-.837-1.695-.84-2.104-.89-2.94-.213-7.348-.213-7.348-.213h-.009s-4.408 0-7.347.213c-.41.05-1.304.053-2.104.89-.63.637-.834 2.085-.834 2.085S8 15.276 8 16.976v1.595c0 1.698.21 3.397.21 3.397s.205 1.447.834 2.085c.8.837 1.848.81 2.316.897 1.68.162 7.14.212 7.14.212s4.413-.006 7.35-.22c.412-.049 1.306-.053 2.106-.889.63-.637.834-2.085.834-2.085s.21-1.7.21-3.399v-1.593a31.8 31.8 0 00-.21-3.398zm-12.457 6.922l-.002-5.901 5.675 2.961-5.674 2.94z" fill="currentColor"></path></svg></a>
                            <a aria-label="Twitter" target="_blank"><svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg"><path d="M25.55 12.364c.982.177 1.993.12 2.95-.165a11.638 11.638 0 00-3.01 2.183 11.31 11.31 0 01-9.144 11.903 14.601 14.601 0 01-8.846-2.36s3.933 1.062 6.104-1.34c0 0-3.696.337-4.581-2.52a11.242 11.242 0 002.58-.364 4.197 4.197 0 01-3.413-4.115 4.05 4.05 0 001.928.515s-2.857-2.58-1.087-5.607c0 0 3.829 4.675 8.571 4.407a4.077 4.077 0 016.855-3.871 6.393 6.393 0 002.773-1.335 3.547 3.547 0 01-1.68 2.67z" fill="currentColor"></path></svg></a>
                            <a aria-label="Instagram" target="_blank"><svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M18 10.621c2.403 0 2.688.01 3.637.053.877.04 1.354.188 1.671.31.42.162.72.359 1.035.672.316.316.51.615.672 1.035.123.318.27.795.311 1.673.043.948.052 1.233.052 3.636s-.009 2.688-.052 3.637c-.04.878-.186 1.354-.31 1.671a2.8 2.8 0 01-.674 1.035c-.315.316-.615.51-1.035.672-.315.125-.792.27-1.67.311-.949.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.186-1.671-.31a2.787 2.787 0 01-1.036-.672 2.771 2.771 0 01-.671-1.036c-.125-.317-.27-.794-.311-1.67-.043-.95-.053-1.235-.053-3.638 0-2.403.01-2.688.053-3.637.04-.877.188-1.354.31-1.671.162-.42.359-.72.672-1.036.316-.315.615-.51 1.035-.671.318-.125.795-.27 1.673-.311.948-.043 1.233-.053 3.636-.053zM18 9c-2.445 0-2.751.01-3.711.054-.957.045-1.612.195-2.184.418a4.385 4.385 0 00-1.595 1.039 4.417 4.417 0 00-1.037 1.594c-.223.572-.376 1.227-.419 2.184C9.009 15.249 9 15.557 9 18c0 2.444.01 2.751.054 3.711.045.957.195 1.613.418 2.184.23.593.537 1.095 1.039 1.595a4.398 4.398 0 001.594 1.038c.572.222 1.227.375 2.184.418.96.045 1.268.054 3.711.054 2.444 0 2.751-.01 3.711-.054.957-.045 1.613-.195 2.184-.419a4.385 4.385 0 001.595-1.038 4.398 4.398 0 001.038-1.594c.222-.572.375-1.227.418-2.184.045-.96.054-1.267.054-3.711s-.01-2.751-.054-3.711c-.045-.957-.195-1.612-.419-2.184a4.412 4.412 0 00-1.038-1.595 4.41 4.41 0 00-1.594-1.037c-.572-.223-1.227-.376-2.184-.419C20.751 9.009 20.444 9 18 9z"></path><path d="M18 13.379a4.622 4.622 0 100 9.243 4.622 4.622 0 000-9.243zM18 21a3 3 0 110-6 3 3 0 010 6z"></path><circle cx="22.805" cy="13.195" r="1.08"></circle></g></svg></a>
                        </div>
                        <p>© Elementor. All Rights Reserved</p>
                    </div>
                </div>
            </footer >
            {/* Responsive */}
            <fotter className="flex lg:hidden max-w-full text-white bg-pinkstronge">
                <div className="w-full mx-auto">
                    <div className="z-20">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full px-7 py-4  text-left">
                                        <h1 className="text-2xl text-white">Product</h1>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } h-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        leave="transition duration-200 ease-out"
                                    >
                                        <Disclosure.Panel className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90">
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
                                        <h1 className="text-2xl text-white">Use Cases</h1>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        leave="transition duration-200 ease-out"
                                    >
                                        <Disclosure.Panel className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90">
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
                                        <h1 className="text-2xl text-white">Resources</h1>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        leave="transition duration-200 ease-out"
                                    >
                                        <Disclosure.Panel className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90">
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
                                        <h1 className="text-2xl text-white">Company</h1>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        leave="transition duration-200 ease-out"
                                    >
                                        <Disclosure.Panel className="flex flex-col px-7 pt-4 pb-2 text-sm space-y-3 bg-opacity-90">
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

                        <div className="pl-7 mt-3 mx-auto">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-pinklight" xmlnsXlink="http://www.w3.org/1999/xlink" width="163px" height="27px" viewBox="0 0 163 27"><g id="e-text"><path id="Path" d="M102.054 12.939 C102.054 12.939 100.65 13.273 99.465 13.557 L97.66 13.968 C97.655 13.968 97.647 13.968 97.645 13.968 97.645 13.482 97.68 12.969 97.796 12.497 97.946 11.891 98.274 11.183 98.842 10.872 99.461 10.534 100.216 10.494 100.872 10.756 101.551 11.025 101.861 11.68 101.995 12.359 102.032 12.548 102.058 12.738 102.075 12.931 L102.054 12.939 Z M106.756 13.966 C106.756 9.259 103.792 7.235 100.006 7.235 95.724 7.235 93.043 10.201 93.043 13.989 93.043 18.108 95.325 20.79 100.241 20.79 102.899 20.79 104.405 20.32 106.192 19.425 L105.51 16.341 C104.145 16.953 102.876 17.329 101.181 17.329 99.324 17.329 98.264 16.623 97.865 15.305 L106.638 15.305 C106.709 14.953 106.756 14.554 106.756 13.966 Z" fill="currentColor" stroke="none"></path><path id="Path-1" d="M62.925 12.939 C62.925 12.939 61.521 13.273 60.336 13.557 L58.532 13.968 C58.526 13.968 58.518 13.968 58.516 13.968 58.516 13.482 58.551 12.969 58.667 12.497 58.817 11.891 59.145 11.183 59.713 10.872 60.332 10.534 61.087 10.494 61.743 10.756 62.422 11.025 62.732 11.68 62.866 12.359 62.903 12.548 62.929 12.738 62.947 12.931 L62.925 12.939 Z M67.627 13.966 C67.627 9.259 64.663 7.235 60.877 7.235 56.595 7.235 53.914 10.201 53.914 13.989 53.914 18.108 56.196 20.79 61.112 20.79 63.77 20.79 65.276 20.32 67.063 19.425 L66.381 16.341 C65.017 16.953 63.747 17.329 62.052 17.329 60.195 17.329 59.135 16.623 58.736 15.305 L67.509 15.305 C67.58 14.953 67.627 14.554 67.627 13.966 Z" fill="currentColor" stroke="none"></path><path id="Path-2" d="M52.311 3.776 L47.967 3.776 47.967 20.32 52.311 20.32 52.311 3.776 Z" fill="currentColor" stroke="none"></path><path id="Path-3" d="M107.674 7.658 L112.238 7.658 113.198 10.583 C113.799 9.139 115.151 7.281 117.55 7.281 120.842 7.281 122.631 8.951 122.631 13.258 L122.631 20.319 118.069 20.319 C118.069 18.847 118.071 17.376 118.072 15.905 118.072 15.231 118.061 14.556 118.071 13.881 118.078 13.258 118.122 12.615 117.791 12.056 117.567 11.679 117.2 11.401 116.803 11.212 115.997 10.827 115.124 10.839 114.334 11.25 114.139 11.35 113.199 11.859 113.199 12.095 L113.199 20.319 108.637 20.319 108.637 11.075 107.674 7.658 Z" fill="currentColor" stroke="none"></path><path id="Path-4" d="M126.324 10.976 L124.23 10.976 124.23 7.658 126.324 7.658 126.324 5.583 130.886 4.509 130.886 7.658 135.472 7.658 135.472 10.976 130.886 10.976 130.886 14.695 C130.886 16.154 131.592 16.837 132.65 16.837 133.731 16.837 134.344 16.695 135.26 16.39 L135.801 19.826 C134.554 20.367 133.002 20.626 131.425 20.626 128.109 20.626 126.32 19.049 126.32 15.991 L126.32 10.976 126.324 10.976 Z" fill="currentColor" stroke="none"></path><path id="Path-5" d="M144.252 17.026 C145.921 17.026 146.91 15.826 146.91 13.895 146.91 11.964 145.968 10.858 144.323 10.858 142.652 10.858 141.689 11.964 141.689 13.966 141.689 15.848 142.631 17.026 144.252 17.026 Z M144.299 7.165 C148.581 7.165 151.708 9.847 151.708 14.013 151.708 18.202 148.581 20.72 144.252 20.72 139.947 20.72 136.889 18.131 136.889 14.013 136.891 9.847 139.926 7.165 144.299 7.165 Z" fill="currentColor" stroke="none"></path><path id="Path-6" d="M88.954 7.619 C88.146 7.287 87.232 7.163 86.361 7.288 85.917 7.353 85.483 7.481 85.08 7.68 83.975 8.227 83.112 9.472 82.648 10.583 82.345 9.304 81.459 8.152 80.165 7.619 79.357 7.287 78.443 7.163 77.573 7.288 77.128 7.353 76.694 7.481 76.291 7.68 75.188 8.225 74.327 9.466 73.863 10.573 L73.863 10.492 72.934 7.658 68.371 7.658 69.332 11.075 69.332 20.32 73.865 20.32 73.865 12.06 C73.881 11.999 74.084 11.885 74.119 11.857 74.65 11.48 75.275 11.09 75.939 11.041 76.617 10.99 77.286 11.336 77.691 11.875 77.734 11.934 77.775 11.993 77.813 12.056 78.145 12.615 78.1 13.258 78.092 13.881 78.084 14.556 78.095 15.23 78.094 15.905 78.092 17.376 78.09 18.847 78.09 20.318 L82.654 20.318 82.654 13.258 C82.654 13.222 82.654 13.187 82.654 13.151 L82.654 12.062 C82.664 12.003 82.872 11.883 82.91 11.857 83.44 11.48 84.065 11.09 84.73 11.041 85.408 10.99 86.076 11.336 86.481 11.875 86.525 11.934 86.566 11.993 86.603 12.056 86.935 12.615 86.89 13.258 86.884 13.881 86.876 14.556 86.888 15.23 86.886 15.905 86.884 17.376 86.882 18.847 86.882 20.318 L91.445 20.318 91.445 13.258 C91.443 11.189 91.146 8.522 88.954 7.619 Z" fill="currentColor" stroke="none"></path><path id="Path-7" d="M162.503 7.283 C160.105 7.283 158.752 9.141 158.151 10.585 L157.189 7.66 152.625 7.66 153.586 11.077 153.586 20.322 158.151 20.322 158.151 11.779 C158.801 11.665 162.33 12.314 163 12.56 L163 7.298 C162.837 7.289 162.672 7.283 162.503 7.283 Z" fill="currentColor" stroke="none"></path><path id="Path-8" d="M41.663 12.516 C41.663 12.516 40.26 12.851 39.074 13.134 L37.27 13.545 C37.264 13.545 37.256 13.545 37.254 13.545 37.254 13.059 37.29 12.546 37.405 12.074 37.555 11.468 37.883 10.76 38.451 10.449 39.07 10.111 39.825 10.071 40.482 10.333 41.16 10.603 41.471 11.257 41.604 11.936 41.642 12.125 41.667 12.316 41.685 12.508 L41.663 12.516 Z M46.367 13.543 C46.367 8.836 43.403 6.813 39.617 6.813 35.335 6.813 32.654 9.778 32.654 13.566 32.654 17.685 34.937 20.368 39.853 20.368 42.51 20.368 44.016 19.897 45.803 19.003 L45.121 15.919 C43.757 16.53 42.487 16.906 40.792 16.906 38.935 16.906 37.875 16.2 37.476 14.882 L46.249 14.882 C46.32 14.532 46.367 14.131 46.367 13.543 Z" fill="currentColor" stroke="none"></path></g><path fillRule="evenodd" clipRule="evenodd" d="M0 13.2084C0 20.4107 5.83624 26.2501 13.0347 26.2501C20.2332 26.2501 26.0695 20.4107 26.0695 13.2084C26.0695 6.00609 20.2332 0.166748 13.0347 0.166748C5.83624 0.166748 0 6.00609 0 13.2084ZM9.77554 7.77424H7.60342V18.6426H9.77554V7.77424ZM11.9477 7.77424H18.4641V9.94753H11.9477V7.77424ZM18.4641 12.1208H11.9477V14.2941H18.4641V12.1208ZM11.9477 16.4693H18.4641V18.6426H11.9477V16.4693Z" fill="currentColor" id="e-icon"></path></svg>
                                <p className="mt-10 w-5/6">Elementor is the leading website builder platform for professionals on WordPress. Elementor serves web professionals, including developers, designers and marketers, and boasts a new website created every 10 seconds on its platform.</p>
                            </div>
                            <div>
                                <h1 className="text-pinklight text-2xl mt-10 mb-5">Subscribe To Our Newsletter</h1>
                                <div className="flex mb-5">
                                    <input className="bg-transparent border border-pinklight"></input>
                                    <div className="flex justify-center items-center py-3 px-5 bg-pinklight text-pinkstronge">Subscribe</div>
                                </div>
                                <p>By entering your email, you agree to our<br /><b>Terms & Conditions and Privacy Policy.</b></p>
                            </div>
                            <div className="flex items-center mt-16 mb-5 space-x-2">
                                <a aria-label="Facebook" target="_blank"><svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg"><path d="M15.768 15.737H12v3.315h3.768V29h4.422v-9.948h4.42v-3.315h-4.42v-1.335c0-1.002 1.053-3.087 2.589-3.087h1.831V8h-3.868c-5.457.795-4.974 7.737-4.974 7.737z" fill="currentColor"></path></svg></a>
                                <a aria-label="Youtube" target="_blank"><svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg"><path d="M28.79 13.58s-.206-1.448-.834-2.085c-.8-.837-1.695-.84-2.104-.89-2.94-.213-7.348-.213-7.348-.213h-.009s-4.408 0-7.347.213c-.41.05-1.304.053-2.104.89-.63.637-.834 2.085-.834 2.085S8 15.276 8 16.976v1.595c0 1.698.21 3.397.21 3.397s.205 1.447.834 2.085c.8.837 1.848.81 2.316.897 1.68.162 7.14.212 7.14.212s4.413-.006 7.35-.22c.412-.049 1.306-.053 2.106-.889.63-.637.834-2.085.834-2.085s.21-1.7.21-3.399v-1.593a31.8 31.8 0 00-.21-3.398zm-12.457 6.922l-.002-5.901 5.675 2.961-5.674 2.94z" fill="currentColor"></path></svg></a>
                                <a aria-label="Twitter" target="_blank"><svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg"><path d="M25.55 12.364c.982.177 1.993.12 2.95-.165a11.638 11.638 0 00-3.01 2.183 11.31 11.31 0 01-9.144 11.903 14.601 14.601 0 01-8.846-2.36s3.933 1.062 6.104-1.34c0 0-3.696.337-4.581-2.52a11.242 11.242 0 002.58-.364 4.197 4.197 0 01-3.413-4.115 4.05 4.05 0 001.928.515s-2.857-2.58-1.087-5.607c0 0 3.829 4.675 8.571 4.407a4.077 4.077 0 016.855-3.871 6.393 6.393 0 002.773-1.335 3.547 3.547 0 01-1.68 2.67z" fill="currentColor"></path></svg></a>
                                <a aria-label="Instagram" target="_blank"><svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M18 10.621c2.403 0 2.688.01 3.637.053.877.04 1.354.188 1.671.31.42.162.72.359 1.035.672.316.316.51.615.672 1.035.123.318.27.795.311 1.673.043.948.052 1.233.052 3.636s-.009 2.688-.052 3.637c-.04.878-.186 1.354-.31 1.671a2.8 2.8 0 01-.674 1.035c-.315.316-.615.51-1.035.672-.315.125-.792.27-1.67.311-.949.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.186-1.671-.31a2.787 2.787 0 01-1.036-.672 2.771 2.771 0 01-.671-1.036c-.125-.317-.27-.794-.311-1.67-.043-.95-.053-1.235-.053-3.638 0-2.403.01-2.688.053-3.637.04-.877.188-1.354.31-1.671.162-.42.359-.72.672-1.036.316-.315.615-.51 1.035-.671.318-.125.795-.27 1.673-.311.948-.043 1.233-.053 3.636-.053zM18 9c-2.445 0-2.751.01-3.711.054-.957.045-1.612.195-2.184.418a4.385 4.385 0 00-1.595 1.039 4.417 4.417 0 00-1.037 1.594c-.223.572-.376 1.227-.419 2.184C9.009 15.249 9 15.557 9 18c0 2.444.01 2.751.054 3.711.045.957.195 1.613.418 2.184.23.593.537 1.095 1.039 1.595a4.398 4.398 0 001.594 1.038c.572.222 1.227.375 2.184.418.96.045 1.268.054 3.711.054 2.444 0 2.751-.01 3.711-.054.957-.045 1.613-.195 2.184-.419a4.385 4.385 0 001.595-1.038 4.398 4.398 0 001.038-1.594c.222-.572.375-1.227.418-2.184.045-.96.054-1.267.054-3.711s-.01-2.751-.054-3.711c-.045-.957-.195-1.612-.419-2.184a4.412 4.412 0 00-1.038-1.595 4.41 4.41 0 00-1.594-1.037c-.572-.223-1.227-.376-2.184-.419C20.751 9.009 20.444 9 18 9z"></path><path d="M18 13.379a4.622 4.622 0 100 9.243 4.622 4.622 0 000-9.243zM18 21a3 3 0 110-6 3 3 0 010 6z"></path><circle cx="22.805" cy="13.195" r="1.08"></circle></g></svg></a>
                            </div>
                            <p>© Elementor. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </fotter >
        </>
    )
}
