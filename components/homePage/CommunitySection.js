import { ChevronRightIcon } from "@heroicons/react/solid"
import { IconNoColor } from "../Icon"
import { data } from "../../data/data"
import { useRef, useEffect } from "react"
import { animate } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function CommunitySection() {
  const { communitySection } = data[0]

  const { ref, inView } = useInView()

  function Counter({ from, to, simb }) {
    const nodeRef = useRef()

    useEffect(() => {
      const node = nodeRef.current

      const controls = animate(from, to, {
        duration: 3,
        onUpdate(value) {
          node.textContent = value.toFixed(0) + simb
        },
      })

      return () => controls.stop()
    }, [from, to])

    return <p className="text-5xl sm:text-7xl font-extrabold" ref={nodeRef} />
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between my-20">
        <div className="md:w-4/6 mb-10">
          <h1 className="text-1xl ">COMMUNITY</h1>
          <h1 className="text-3xl md:text-5xl font-extrabold my-5">
            Join Our Community of Web Creators
          </h1>
          <p className="mt-3 mb-5  text-xl">
            Head over to the Community Hub, meet and engage with other web
            creators and be the first to learn about new product updates.
          </p>
          <a className=" tracking-wide justify-center text-lg py-3 px-3 text-bluedark border border-bluedark cursor-pointer group duration-500 inline-flex hover:text-white hover:bg-bluedark">
            Go to the Hub
            <IconNoColor
              Icon={ChevronRightIcon}
              className="group-hover:text-white text-bluedark "
            />
          </a>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://elementor.com/cdn-cgi/image/f=auto,w=394,h=444/wp-content/uploads/2021/05/Group-1086831-1.png"
            className="mx-auto object-cover"
          />
        </div>
      </div>
      <div ref={ref}>
        <div className="flex sm:hidden lg:flex flex-col lg:flex-row justify-between space-x-6 w-full">
          {communitySection.map(({ id, simb, value, desc }) => (
            <div key={id} className="flex flex-col p-5 text-center">
              <Counter from={0} to={value} simb={simb} />
              {desc.map((t) => (
                <p className="text-xl">
                  {t}
                  <br />
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="hidden sm:flex lg:hidden flex-col w-full">
          <div className="flex flex-row justify-between w-11/12 mx-auto">
            {communitySection.map(({ id, simb, value, desc }) => (
              <div key={id} className="flex flex-col p-5 text-center">
                <Counter from={0} to={value} simb={simb} />
                {desc.map((t) => (
                  <p className="text-xl">
                    {t}
                    <br />
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
