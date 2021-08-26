import { ChevronRightIcon } from "@heroicons/react/solid";
import { IconNoColor } from "../Icon";

export function BusinessSection() {
  return (
    <>
      <div className="flex w-full relative">
        <div className="flex flex-col md:flex-row justify-between mt-20">
          <div className="w-full md:w-3/6 text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 px-5">User Built, User Driven</h1>

            <div className="flex flex-col md:flex-row md:space-x-12 z-30 md:absolute">
              <div className="w-full md:w-5/12 lg:w-3/12 px-10 py-7 bg-bluelight md:mt-20">
                <h1 className="text-2xl  ">Add-Ons by Our Users</h1>
                <p className="mt-3 mb-5 text-gray-500">Professionals from our community have built custom add-ons for Elementor, extending our vast selection of website templates and widgets.</p>
                <a className=" tracking-wide text-lg text-bluedark border-b border-bluedark border-opacity-0 hover:border-opacity-100 cursor-pointer duration-500 inline-flex">Browse Add-Ons
                  <IconNoColor Icon={ChevronRightIcon} className="text-bluedark" />
                </a>
              </div>
              <div className="w-full md:w-5/12 lg:w-3/12 px-10 py-7 bg-bluelight md:mt-20 mx-auto">
                <h1 className="text-2xl  ">Build Your Own</h1>
                <p className="mt-3 mb-5 text-gray-500">Built as an open-source tool with extensive API, Elementor enables you to extend our product by developing your own templates and widgets.</p>
                <a className=" tracking-wide text-lg text-bluedark border-b border-bluedark border-opacity-0 hover:border-opacity-100  transition ease-in-expo cursor-pointer duration-500 inline-flex">Learn More
                  <IconNoColor Icon={ChevronRightIcon} className="text-bluedark" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/6">
            <img loading="lazy" className="w-screen  object-cover" src="https://hrs-corporate-prod.s3.eu-west-1.amazonaws.com/wp-content/uploads/sites/2/2021/03/16105521/hrs-enterprise-meetings-as-a-service-1-1024x686.jpg" />
          </div>
        </div>
      </div>
    </>
  )
}
