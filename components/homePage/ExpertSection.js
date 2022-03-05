import { ChevronRightIcon } from "@heroicons/react/solid"
import { IconNoColor } from "../Icon"
import { data } from "../../data/data"

export function ExpertSection() {
  const { expertSection } = data[0]
  return (
    <>
      <div className="flex justify-between space-x-20 my-5 md:mt-40">
        <div className="md:w-3/6 pb-10">
          <h1 className="text-1xl ">ELEMENTOR EXPERTS</h1>
          <h1 className="text-3xl md:text-5xl font-extrabold my-5">
            Find Your Next Project With Elementor Experts
          </h1>
          <p className="mt-3 mb-5  text-xl lg:w-5/6">
            Find a developer, designer, or business professional for your
            project or get hired as an expert yourself.
          </p>
          <a className=" tracking-wide text-lg py-3 text-orangedark border-b border-orangedark border-opacity-0 cursor-pointer duration-500 inline-flex hover:border-opacity-100">
            Learn More
            <IconNoColor Icon={ChevronRightIcon} className="text-orangedark" />
          </a>
        </div>
        <div className="relative flex mb-10 md:mb-32 w-full md:w-3/6">
          <img
            loading="lazy"
            src="https://elementor.com/cdn-cgi/image/f=auto,w=690/wp-content/uploads/2021/05/Group-1086831-1-1-1.png"
            className="hidden md:flex object-contain"
          />
          <div className="hidden lg:flex space-x-3 absolute top-32 -left-32">
            <img
              loading="lazy"
              src="https://elementor.com/cdn-cgi/image/f=auto,w=403,h=483/wp-content/uploads/2021/05/Group-1086708.png"
              className="w-[200px] h-[250px] object-cover"
            />
            <img
              loading="lazy"
              src="https://elementor.com/cdn-cgi/image/f=auto,w=403,h=483/wp-content/uploads/2021/05/Group-1086706.png"
              className="w-[200px] h-[250px] object-cover"
            />
            <img
              loading="lazy"
              src="https://elementor.com/cdn-cgi/image/f=auto,w=404,h=484/wp-content/uploads/2021/05/Group-1086707-1.png"
              className="w-[200px] h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:space-x-6">
        {expertSection.map((d) => (
          <div key={d.key} className="w-full md:w-3/12 mb-5">
            <h1 className="text-2xl  mb-5">{d.title}</h1>
            <p className=" text-lg text-gray-500">{d.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
