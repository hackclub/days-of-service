import Meta from "@hackclub/meta";
import Events from "../components/events";
import Head from "next/head";
// import Marquee from "react-marquee-slider";

// const photos = [
//   "https://cloud-740uhseap-hack-club-bot.vercel.app/0img_3134.heic",
//   "https://cloud-aow7za3s6-hack-club-bot.vercel.app/0img_3143.heic",
//   "https://cloud-lrmxlj4gd-hack-club-bot.vercel.app/0img_6419.jpg",
//   "https://cloud-e5a0cdvcy-hack-club-bot.vercel.app/0img_6437.jpg",
//   "https://cloud-740uhseap-hack-club-bot.vercel.app/0img_3134.heic",
//   "https://cloud-aow7za3s6-hack-club-bot.vercel.app/0img_3143.heic",
//   "https://cloud-lrmxlj4gd-hack-club-bot.vercel.app/0img_6419.jpg",
//   "https://cloud-e5a0cdvcy-hack-club-bot.vercel.app/0img_6437.jpg",
// ];

export default function Home() {
  return (
    <>
      <Meta
        as={Head} // component to wrap tags in, defaults to React.Fragment
        name="Hack Club" // site name
        title="Days Of Service" // page title
        description="All the info about Hack Club's Days of Service initiative" // page description
      />
      <main className="lg:min-w-screen font-phantom-sans flex flex-col lg:min-h-screen lg:flex-row">
        <div className="lg:wrapper relative flex flex-col gap-6 bg-[#ec3750] bg-opacity-10 py-10 lg:max-h-screen lg:w-[40vw] lg:overflow-y-scroll">
          <section className="flex flex-col content-end justify-end px-4 lg:px-10">
            <h1 className="text-5xl font-bold">
              <span className="text-[#ec3750]">Hack Club</span>
              <br />
              Days of Service
            </h1>
          </section>
          {/* <section className="sm:hidden">
            <Marquee velocity={10}>
              {photos.map((photo) => (
                <img
                  key={photo}
                  className="mr-2 h-full w-[150px] object-contain"
                  src={photo}
                />
              ))}
            </Marquee>
          </section> */}
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">What is Hack Club?</h2>
            <p className="text-lg">
              Hack Club is a 501(c)3 nonprofit, supporting the largest network
              of highly technical teen hackers from around the world. Learn more
              about us{" "}
              <a
                className="underline decoration-[#ec3750] hover:text-[#ec3750]"
                href="https://hackclub.com"
              >
                here
              </a>
              .
            </p>
          </section>
          {/* <section className="flex flex-col content-end justify-end px-4 lg:px-10"> */}
          <a
            href="https://hcb.hackclub.com/donations/start/hq"
            target="_blank"
            className="right-5 top-5 rounded-lg bg-[#ec3750] px-3 py-1 text-center text-xl font-medium text-white absolute md:px-6 md:py-3 md:right-10 md:top-10"
          >
            Support us
          </a>
          {/* </section> */}
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">Overview</h2>

            <p className="text-lg pb-3">
              Days of Service is Hack Club’s initiative to support girls learning to code.
            </p>
            
            <p className="text-lg pb-3">
              Working with local youth organizations, high school Hack Club
              leaders run one-day coding
              events (a day of service) that help girls and gender minorities write their first lines of code.  They might build their first ever
              website, video game, application and even code a robot arm to draw! 
            </p>
            <p className="text-lg">
            Built for beginners learning to code, girls are supported by experienced Hack Clubbers. By
              the end of the day, every single participant builds
              something with code. In 2023, Hack Club girls ran Days of Service 6 cities, and in 2024 they'll increase events to more than 10 cities.  
            </p>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10 relative">
            <quote className="text-lg before:content-[''] before:absolute before:bg-cover before:-top-2 before:left-6 before:opacity-40 before:z-0 before:w-7 before:h-7 before:bg-[url('https://icons.hackclub.com/api/icons/0xec3750/glyph:quote.svg')]">
              <br /> <i>Thank you so much for the amazing event! The Girl Scouts clearly were having fun and enjoying everything you taught them. We really appreciate all the effort you put into this event and the hard work you put into before the event.</i>
                <br /> <br /> <i>It was a magical day! We hope we can work with you again in the future.</i>
              <span className="text-[#ec3750]">”</span>
            </quote>
            - Jennifer LeValley 
             <br /> Program Specialist, Girl Scouts Greater Boston
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">
              Watch a video of our latest event:
            </h2>
            <iframe
              className="w-full aspect-[16/9] m-auto"
              src="https://www.youtube.com/embed/hLCCbJw6Osg?si=Um_MuWLuXcShrulz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">
              Not all Days of Service are the same, <br /> but here's what one
              could look like:
            </h2>
            <table className="table-auto border border-separate border-spacing-y-2 border-spacing-x-5 border-[#FEEBEE]">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="relative after:opacity-50 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:border after:border-l-0 after:border-r-0 after:border-b-0 after:border-t-[0.3px] after:border-zinc-400">
                  <td className="text-zinc-500 float-left text-sm">9am</td>
                  <td>Check in</td>
                </tr>
                <tr className="relative after:opacity-50 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:border after:border-l-0 after:border-r-0 after:border-b-0 after:border-t-[0.3px] after:border-zinc-400">
                  <td className="text-zinc-500 float-left text-sm">10am</td>
                  <td>Opening and pick a track <span className="bold italic text-[#ec3750]">(Design a Website OR Build a Game OR Create a circuit board)</span></td>
                </tr>
                <tr className="relative after:opacity-50 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:border after:border-l-0 after:border-r-0 after:border-b-0 after:border-t-[0.3px] after:border-zinc-400">
                  <td className="text-zinc-500 float-left text-sm">10:30am</td>
                  <td>
                    Workshops: Learn all you need to build
                  </td>
                </tr>
                <tr className="relative after:opacity-50 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:border after:border-l-0 after:border-r-0 after:border-b-0 after:border-t-[0.3px] after:border-zinc-400">
                  <td className="text-zinc-500 float-left text-sm">12:30pm</td>
                  <td>Lunch</td>
                </tr>
                <tr className="relative after:opacity-50 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:border after:border-l-0 after:border-r-0 after:border-b-0 after:border-t-[0.3px] after:border-zinc-400">
                  <td className="text-zinc-500 float-left text-sm">1pm</td>
                  <td>
                    Work on your project with mentors
                  </td>
                  {/* <caption className="after: opacity-50 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:border after:border-l-0 after:border-r-0 after:border-b-0 after:border-t-[0.3px] after:border-zinc-400"></caption> */}
                </tr>
                <tr className="relative after:opacity-50 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:border after:border-l-0 after:border-r-0 after:border-b-0 after:border-t-[0.3px] after:border-zinc-400">
                  <td className="text-zinc-500 float-left text-sm">2pm</td>
                  <td>Brain Break</td>
                </tr>
                <tr className="relative after:opacity-50 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:border after:border-l-0 after:border-r-0 after:border-b-0 after:border-t-[0.3px] after:border-zinc-400">
                  <td className="text-zinc-500 float-left text-sm">2:30pm</td>
                  <td>Final Coding Time</td>
                </tr>
                <tr>
                  <td className="text-zinc-500 float-left text-sm">4:30pm</td>
                  <td>Project Showcase & Closing Ceremony</td>
                </tr>
              </tbody>
            </table>
            {/* <p className="text-sm">*Not all Days of Service are the same</p> */}
          </section>
          <section className="flex flex-row gap-2 px-4 lg:px-10">
            <img
              src="https://icons.hackclub.com/api/icons/0xec3750/glyph:message-simple-new.svg"
              className="w-7 inline mr-1"
            />
            <h2 className="text-lg text-[#ec3750]">
              Interested in running a day of service? <br /> Please reach us at{" "}
              <a href="mailto:nila@hackclub.com" className="underline">
                nila@hackclub.com
              </a>
            </h2>
          </section>
        </div>
        <div className="flex flex-col p-4 lg:max-h-screen lg:w-[60vw] lg:overflow-y-scroll relative">
          <div className="bg-[#FEEBEE] mb-4 relative hover:scale-[1.03] transition duration-250 ease-in">
            <div className="w-full h-full blur-[0.7px] absolute rounded-lg bg-cover bg-center text-white bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.43),rgba(0,0,0,0.43)),url('https://cloud-g2uzli3ny-hack-club-bot.vercel.app/0hc.png')]"></div>
            <a
              href="/code"
              target="_blank"
              className="w-full block py-16 z-3 relative text-center text-2xl font-bold text-white"
            >
              Teenager? Click here.
            </a>
            <img src="/corner.png" className="w-12 absolute -top-1 -right-1" />
          </div>
          <section className="flex min-h-[50vh] flex-col gap-2 lg:px-0">
            <h2 className="text-2xl font-bold">Previous Days of Service</h2>
            <Events />
          </section>
        </div>
      </main>
      {/* <div className='min-h-screen min-w-screen font-phantom-sans px-8 gap-6'>
      <Info />
      </div> */}
    </>
  );
}
