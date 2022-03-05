import { data } from "../../data/data"

export function VideoSection() {
  const { videoSection } = data[0]
  return (
    <>
      <div className="flex justify-center absolute -top-72 sm:-top-80 md:-top-72 xl:-top-80 left-0 right-0">
        <video
          preload="true"
          loop
          autoPlay
        >
          <source
            src="https://elementor.com/wp-content/uploads/2021/06/02_MainVideo_1066_600_HR201.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="flex flex-col md:flex-row  justify-between mx-auto mt-5 sm:mt-20 md:mt-80">
        {videoSection.map((d) => (
          <>
            <div className="w-full md:w-3/12 mb-5" key={d.id}>
              <h1 className="mb-5 font-bold text-xl">{d.title}</h1>
              <p>{d.description}</p>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
