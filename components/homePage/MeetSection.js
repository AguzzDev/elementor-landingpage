import { ChevronRightIcon } from "@heroicons/react/solid";
import { IconNoColor } from "../Icon";

export function MeetSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:space-x-5 w-10/12 mx-auto">
        <div className="w-10/12 md:w-3/6 mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold my-5">Meet Elementor's Live Editor</h1>
          <p className="mt-3 mb-5  text-xl">Visualize & build your website from top to bottom.<br />Drag & drop any widget or section onto your canvas – zero coding required.</p>
          <a className=" tracking-wide justify-center text-lg py-3 px-3 text-orangedark border border-orangedark cursor-pointer group duration-500 inline-flex hover:text-white hover:bg-orangedark">Explore the Editor
            <IconNoColor Icon={ChevronRightIcon} className="group-hover:text-white text-orangedark" />
          </a>
        </div>
        <div className="w-full md:w-3/6 my-auto">
          <img loading="lazy" src="https://elementor.com/cdn-cgi/image/f=auto,w=739/wp-content/uploads/2021/05/Group-1086839-1.png" className="object-cover mx-auto" />
        </div>
      </div>
    </>
  )
}
