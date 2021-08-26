import { data } from "../../data/data"

export function VideoSection() {
  const { videoSection } = data.[0]
  return (
    <>
      <div className="flex justify-center">
        <video tabIndex="0" preload="true" loop autoPlay className="hidden xl:flex justify-center absolute" style={{ bottom: "96%" }} >
          <source src="https://elementor.com/wp-content/uploads/2021/06/02_MainVideo_1066_600_HR201.mp4" type="video/mp4"></source>
        </video>
        <video tabIndex="0" preload="true" loop autoPlay className="hidden lg:flex xl:hidden justify-center absolute " style={{ bottom: "95%" }} >
          <source src="https://elementor.com/wp-content/uploads/2021/06/02_MainVideo_1066_600_HR201.mp4" type="video/mp4"></source>
        </video>
        <video tabIndex="0" preload="true" loop autoPlay className="hidden md:flex lg:hidden justify-center absolute " style={{ bottom: "97%" }} >
          <source src="https://elementor.com/wp-content/uploads/2021/06/02_MainVideo_1066_600_HR201.mp4" type="video/mp4"></source>
        </video>
        <video tabIndex="0" preload="true" loop autoPlay className="hidden sm:flex md:hidden justify-center absolute " style={{ bottom: "100.5%" }} >
          <source src="https://elementor.com/wp-content/uploads/2021/06/02_MainVideo_1066_600_HR201.mp4" type="video/mp4"></source>
        </video>
        <video tabIndex="0" preload="true" loop autoPlay className="flex sm:hidden justify-center absolute " style={{ bottom: "99.5%" }} >
          <source src="https://elementor.com/wp-content/uploads/2021/06/02_MainVideo_1066_600_HR201.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="flex flex-col md:flex-row  justify-between mx-auto mt-20 md:mt-80 lg:mt-96">
        {videoSection.map(d => (
          <>
            <div className="w-full md:w-3/12 mb-5"
              key={d.id}
            >
              <h1 className="mb-5 font-bold text-xl">{d.title}</h1>
              <p>{d.description}</p>
            </div>

          </>
        ))}
      </div>
    </>
  )
}
