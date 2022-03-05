import Image from "next/image"

export function Testimony1() {
  return (
    <>
      <div className="bg-pinkstronge w-full mt-10 md:mt-40">
        <div className="flex flex-col-reverse lg:flex-row justify-between w-10/12 mx-auto py-5">
          <div className="flex flex-col w-full md:w-4/6 lg:mt-20 text-white lg:p-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              “Elementor was the first time I felt a good balance between the
              freedom to design what you want and a tool flexible enough to make
              the process easy and even enjoyable.”
            </h1>
            <p className="text-2xl mt-6 mb-3">Mordi Levi</p>
            <p className="text-1xl">
              Designer, Illustrator, and Owner of Mindcube
            </p>
          </div>
          <div>
            <div>
              <div className="hidden md:flex">
                <Image width={1400} height={1400} src="/image1.png" />
              </div>
              <div className="flex md:hidden">
                <Image width={800} height={800} src="/image1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export function Testimony2() {
  return (
    <>
      <div className="bg-graypage w-full mt-10 md:mt-20">
        <div className="flex flex-col-reverse lg:flex-row justify-between w-10/12 mx-auto py-5">
          <div className="flex flex-col w-full md:w-4/6 lg:mt-20 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-pinkmedium">
              “The best thing about Elementor is the community and the great
              developers behind this ingenious software. It gives me great
              confidence in the quality of the product & the assurance that
              Elementor will be around for years to come.”
            </h1>
            <p className="text-2xl mt-6 mb-3 text-black">Brandon Duncan</p>
            <p className="text-1xl text-gray-600">
              Owner & Creative Director of Regent Web Design
            </p>
          </div>
          <div>
              <div className="hidden md:flex">
                <Image width={1400} height={1400} src="/image3.png" />
              </div>
              <div className="flex md:hidden">
                <Image width={800} height={800} src="/image3.png" />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
