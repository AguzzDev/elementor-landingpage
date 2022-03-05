import { ChevronRightIcon } from '@heroicons/react/solid'

import { Icon } from '../Icon'
import { data } from "../../data/data"

export function SkillsSection() {
  const { title, description, topTitle, articles } = data[0].skillSection

  return (
    <>
      <div className="w-10/12 md:pl-6 lg:pl-0 md:w-2/4">
        <h1 className="text-1xl ">{topTitle}</h1>
        <h1 className="text-3xl md:text-5xl font-extrabold my-5">{title}</h1>
        <p className="w-full md:w-4/6  text-xl">{description}</p>
      </div>

      <div className="w-full lg:w-2/4 mt-10">
        <div className="grid grid-cols-2 gap-5 mb-10">
          {articles.map(d => (
            <div className="w-full lg:w-3/4" key={d.id}>
              <div>
                <img src={d.image} className="w-full object-cover" />
              </div>
              <div>
                <h1 className="mt-2 text-2xl font-extrabold">{d.title} </h1>
                <p className="mt-3 mb-5  text-xl">{d.description}</p>
                <a className=" tracking-wide text-lg text-pinkstronge border-b border-pinkstronge border-opacity-0 hover:border-opacity-100 cursor-pointer duration-500 inline-flex">
                  {d.button}
                  <Icon Icon={ChevronRightIcon} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
