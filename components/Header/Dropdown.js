import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Icon, IconNoColor } from '../Icon';
import { Svg1, Svg2, Svg3, Svg4 } from '../Svg';

export function Dropdown1() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown1 active' : 'dropdown1'}
      >
        <div className="flex">
          <div className="flex flex-col w-3/12 space-y-6 px-10 py-10  font-bold">
            <a href="#" className="flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">
              <div>Drag & Drop Live</div>
              <div><IconNoColor Icon={ChevronRightIcon} /></div>
            </a>
            <a href="#" className="flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">
              <div>Workflok Optimization</div>
              <div><IconNoColor Icon={ChevronRightIcon} /></div>
            </a>
            <a href="#" className="flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">
              <div>90+ Widgets</div>
              <div><IconNoColor Icon={ChevronRightIcon} /></div>
            </a>
            <a href="#" className="flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">
              <div>eCommerce</div>
              <div><IconNoColor Icon={ChevronRightIcon} /></div>
            </a>
            <a href="#" className="flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">
              <div>Marketing Platform</div>
              <div><IconNoColor Icon={ChevronRightIcon} /></div>
            </a>
            <a href="#" className="flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">
              <div>Elementor + WordPress</div>
              <div><IconNoColor Icon={ChevronRightIcon} /></div>
            </a>
            <a href="#" className="flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">
              <div>Advanced Web Creation</div>
              <div><IconNoColor Icon={ChevronRightIcon} /></div>
            </a>
            <a href="#" className="flex justify-between items-center border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">
              <div>All Features</div>
              <div><IconNoColor Icon={ChevronRightIcon} /></div>
            </a>
          </div>
          <div className="w-2/6">
            <div className="flex flex-col p-5">
              <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-5">
                <h1 className="text-xl font-bold mb-2">Advanced Web Creation</h1>
                <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
              </div>
              <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-5">
                <h1 className="text-xl font-bold mb-2">Advanced Web Creation</h1>
                <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
              </div>
              <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-5">
                <h1 className="text-xl font-bold mb-2">Advanced Web Creation</h1>
                <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
              </div>
            </div>
          </div>
          <div className="flex w-2/6 items-center justify-center">
            <Svg1 />
          </div>
        </div>
      </ul>
    </>
  )
}
export function Dropdown2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown2 active' : 'dropdown2'}
      >
        <div className="flex  p-10">
          <div className="grid grid-cols-2 w-4/6">
            <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
              <h1>Advanced Web Creation</h1>
              <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
            </div>
            <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
              <h1>Advanced Web Creation</h1>
              <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
            </div>
            <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
              <h1>Advanced Web Creation</h1>
              <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
            </div>
            <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
              <h1>Advanced Web Creation</h1>
              <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
            </div>
            <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
              <h1>Advanced Web Creation</h1>
              <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
            </div>
          </div>
          <div className="flex w-2/6 items-center justify-center">
            <Svg2 />
          </div>
        </div>
      </ul>
    </>
  )
}
export function Dropdown3() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown3 active' : 'dropdown3'}
      >
        <div className="flex">
          <div className="flex flex-col w-2/6 space-y-6 px-10 py-10 text-left items-center font-bold">
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Help Center</a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Tutorials & Courses </a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Developer Tools </a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Support</a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Blog </a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Webinars</a>
          </div>

          <div className="flex w-4/6 items-center justify-center">
            <Svg3 />
          </div>
        </div>
      </ul>
    </>
  )
}
export function Dropdown4() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown4 active' : 'dropdown4'}
      >
        <div className="flex">
          <div className="flex flex-col w-2/6 space-y-6 px-10 py-10 text-left items-center font-bold">
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Help Center</a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Tutorials & Courses </a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Developer Tools </a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Support</a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Blog </a>
            <a href="#" className="border-b border-black border-opacity-0 hover:border-opacity-100 duration-150 transform">Webinars</a>
          </div>

          <div className="flex w-4/6 items-center justify-center">
            <Svg4 />
          </div>
        </div>
      </ul>
    </>
  )
}



