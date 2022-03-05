import Head from "next/head"

import Footer from "../components/Footer"
import { VideoSection } from "../components/homePage/VideoSection"
import { SkillsSection } from "../components/homePage/SkillsSection"
import { Testimony1, Testimony2 } from "../components/homePage/TestimonySection"
import { CommunitySection } from "../components/homePage/CommunitySection"
import { ExpertSection } from "../components/homePage/ExpertSection"
import { BusinessSection } from "../components/homePage/BusinessSection"
import { MeetSection } from "../components/homePage/MeetSection"

export default function Home() {
  return (
    <>
      <Head>
        <title>Elementor Clone</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* <Header /> */}
      <main className="grid place-content-center min-h-screen  bg-pink">
        <div className="mx-auto md:w-3/4 mb-20">
          <div className="text-center text-black">
            <h1 className="font-bold text-4xl md:text-7xl">
              Create Websites,
              <br />
              Design Your Future
            </h1>
            <p className="w-8/12 text-xl md:text-2xl mx-auto my-10">
              Join our community of 8M+ professionals who build websites,
              collaborate, and grow together with the #1 web creation platform
              for WordPress.
            </p>
            <a className="w-3/6 bg-pinkstronge text-white text-xl py-3 px-5 hover:bg-pinkhover cursor-pointer">
              Get Started
            </a>
          </div>
        </div>
      </main>

      <section className="flex flex-col mt-20 relative w-screen">
        <div className=" w-10/12 lg:w-8/12 mx-auto">
          <VideoSection />
        </div>

        <Testimony1 />

        <div className="flex flex-col lg:flex-row justify-between w-10/12 md:space-x-6 mx-auto my-10 md:mt-20">
          <SkillsSection />
        </div>

        <Testimony2 />

        <div className="w-10/12 mx-auto whitespace-none break-all">
          <CommunitySection />
        </div>
        <BusinessSection />
        <div className="w-10/12 mx-auto">
          <ExpertSection />
        </div>

        <div className="bg-orangelight py-10 mt-20">
          <MeetSection />
        </div>
      </section>

      <Footer />
    </>
  )
}
