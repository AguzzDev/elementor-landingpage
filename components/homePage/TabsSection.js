import { TabsLanding } from '../Tabs'
import { Icon1 } from '../Icon'
import { data } from "../../data/data"

export function TabsSection() {
  const { title, description } = data.[0].tabsSection
  return (
    <div>
      <div className="text-left md:text-center mt-10 md:mb-20 md:mt-32 w-full">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold">{title}</h1>
        <p className="text-2xl mx-auto my-10">{description}</p>
      </div>
      <TabsLanding />
      <Icon1 />
    </div>
  )
}
