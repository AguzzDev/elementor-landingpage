import { ChevronRightIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { IconNoColor } from "../Icon";

export function ComunitySection() {
  useEffect(() => {
    const counters = document.querySelectorAll("counters")
    const speed = 2000

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-counter")
        const count = +counter.innerText

        const inc = target / speed

        if (count < target) {
          counter.innerText = count + inc
          setTimeout(updateCount, 1)
        } else {
          count.innerText = target
        }
      }
      updateCount()
    })
  }, [])
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between my-20">
        <div className="md:w-4/6 mb-10">
          <h1 className="text-1xl ">COMMUNITY</h1>
          <h1 className="text-3xl md:text-5xl font-extrabold my-5">Join Our Community of Web Creators</h1>
          <p className="mt-3 mb-5  text-xl">Head over to the Community Hub, meet and engage with other web creators and be the first to learn about new product updates.</p>
          <a className=" tracking-wide justify-center text-lg py-3 px-3 text-bluedark border border-bluedark cursor-pointer group duration-500 inline-flex hover:text-white hover:bg-bluedark">Go to the Hub
            <IconNoColor Icon={ChevronRightIcon} className="group-hover:text-white text-bluedark " />
          </a>
        </div>
        <div>
          <img loading="lazy" src="https://elementor.com/cdn-cgi/image/f=auto,w=394,h=444/wp-content/uploads/2021/05/Group-1086831-1.png" className="mx-auto object-cover" />
        </div>
      </div>
      <div className="flex sm:hidden lg:flex flex-col lg:flex-row justify-between space-x-6 w-full">
        <div className="flex flex-col p-5 text-center">
          <h1 id="counters" className="text-5xl sm:text-7xl font-extrabold " data-counter="8M+">0</h1>
          <p className=" text-xl">Websites Built<br />With Elementor</p>
        </div>
        <div className="flex flex-col p-5 text-center">
          <h1 id="counters" className="text-5xl sm:text-7xl font-extrabold" data-counter="140K+">0</h1>
          <p className=" text-xl">Global Community <br />Members</p>
        </div>
        <div className="flex flex-col p-5 text-center">
          <h1 id="counters" className="text-5xl sm:text-7xl font-extrabold" data-counter="400+">0</h1>
          <p className=" text-xl">Meetup Events <br />in 2020</p>
        </div>
        <div className="flex flex-col p-5 text-center">
          <h1 id="counters" className="text-5xl sm:text-7xl font-extrabold" data-counter="330+">0</h1>
          <p className=" text-xl">Tutorials, Webinars, <br />Courses, and More</p>
        </div>
      </div>

      <div className="hidden sm:flex lg:hidden flex-col w-full">
        <div className="flex flex-row justify-between w-11/12 mx-auto">
          <div className="flex flex-col p-5 text-center">
            <h1 className="text-7xl font-extrabold ">8M+</h1>
            <p className=" text-xl">Websites Built<br />With Elementor</p>
          </div>
          <div className="flex flex-col p-5 text-center">
            <h1 className="text-7xl font-extrabold ">140K+</h1>
            <p className=" text-xl">Global Community <br />Members</p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-11/12 mx-auto">
          <div className="flex flex-col p-5 text-center">
            <h1 className="text-7xl font-extrabold ">400+</h1>
            <p className=" text-xl">Meetup Events <br />in 2020</p>
          </div>
          <div className="flex flex-col p-5 text-center">
            <h1 className="text-7xl font-extrabold ">330+</h1>
            <p className=" text-xl">Tutorials, Webinars, <br />Courses, and More</p>
          </div>
        </div>
      </div>
    </>
  )
}
