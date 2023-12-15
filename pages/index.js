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
      <main className="lg:min-w-screen font-phantom-sans flex flex-col justify-between lg:min-h-screen lg:flex-row">
        <div className="lg:wrapper relative flex flex-col gap-5 bg-[#ec3750] bg-opacity-10 py-10 lg:max-h-screen lg:w-[40vw] lg:overflow-y-scroll">
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
              Hack Club is the largest non profit of over 28,000 teen hackers
              from around the world who code together. Check out our projects{" "}
              <a
                className="underline decoration-[#ec3750] hover:text-[#ec3750]"
                href="https://hackclub.com"
              >
                here
              </a>
              .
            </p>
          </section>
          <section className="flex flex-col content-end justify-end px-4 lg:px-10">
            <a className="right-10 top-10 rounded-lg bg-[#ec3750] px-6 py-3 text-center text-xl font-medium text-white md:absolute lg:static xl:absolute">
              Donate
            </a>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">Overview</h2>
            <p className="text-lg">
              Hack Club has launched a new initiative to help Hack Clubbers to
              share their love and passion of coding with students of gender
              minorities from underpriveleged backgrounds who lack access to CS
              education through one day hackathons.
            </p>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">
              What is a Day of Service?
            </h2>
            <ul className="list-inside list-disc">
              <li className="text-lg">
                A one-day hackathon organized by a group of Hack Clubbers in
                collaboration with an organization in your local area that
                serves gender minorities.{" "}
              </li>
              <li className="text-lg">
                You’ll have the chance to train your organizing and technical
                skills, with the support of highly experienced hackathon
                organizers.
              </li>
              <li className="text-lg">
                You’ll hold an event that exposes more students of gender
                minorities to coding while collaborating on a fun project for
                the day.
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">
              How’s this different from a regular hackathon?
            </h2>
            <p className="text-lg">
              The intention of the hackathon is to help other teenagers build
              their first project with code. To achieve that, the majority of
              guests will come through a nonprofit youth partner, like Girl
              Scouts or Boys and Girls Club– that specifically serve communities
              of gender minorities with less opportunity. And you'll be
              responsible for creating content/workshops at the beginner level
              for them and helping them ship their first project.
            </p>
            <p className="text-lg">
              Hack Club supports Days of Service by offering close personal
              support to organizers, workshops and grants. We help guide you
              from opening your repository to the closing ceremony.
              Additionally, Hack Club provides funding for travel stipends and
              event costs. The number of mentors and people flown in varies
              depending on the number of attendees at the event. To ensure the
              event's success, Hack Club offers abundant documentation about
              past events.
            </p>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">The basics:</h2>
            <ul className="list-decimal pl-6">
              <li className="text-lg">
                Duration: Lasting a minimum of 8 hours.
              </li>
              <li className="text-lg">
                Leadership: Led by a Hack Club member who will act as the
                event's coordinator.
              </li>
              <li className="text-lg">
                Team Management: The coordinator will oversee a group of other
                Hack Club members specifically assembled for the event.
              </li>
              <li className="text-lg">
                Financial Management: The event will run on HCB.
              </li>
              <li className="text-lg">
                Grant Acquisition: The organizers will secure a grant to support
                the event's expenses.
              </li>
              <li className="text-lg">
                Preferred Partner Collaboration: The event will be conducted in
                partnership with a preferred partner organization such as Girl
                Scouts, Boy Scouts, 4H, Boys & Girls Club.
              </li>
              <li className="text-lg">
                Participant Minimum: At least 30 high schoolers should be
                present at each event.
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">What is Hack Club?</h2>
            <p className="text-lg">
              Hack Club is the largest non profit of over 28,000 teen hackers
              from around the world who code together. Check out our projects{" "}
              <a
                className="underline decoration-[#ec3750] hover:text-[#ec3750]"
                href="https://hackclub.com"
              >
                here
              </a>
              .
            </p>
          </section>
          {/* <section className='px-4 lg:px-10 flex flex-col'>
            <h2 className='text-lg text-[#ec3750]'>Partners</h2>
            <img className="w-1/3" src="https://www.girlscouts.org/content/dam/gsusa/images/header/Mainnavlogo.png" />
          </section>
          <section className='px-4 lg:px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>Quotes</h2>
            <div className='flex flex-row gap-4'>
              <img className="w-20 h-20 rounded-full" src="https://github.com/sarthaktexas.png" />
              <div className='flex flex-col justify-center'>
                <p className='italic text-lg'>"Jahde said it was a perfect event she asked if this happens every Saturday!"</p>
                <h3 className=''>Sarthak Mohanty, Hack Clubber</h3>
              </div>
            </div>
          </section> */}
        </div>
        <div className="flex flex-col py-20 lg:max-h-screen lg:w-[59vw] lg:overflow-y-scroll">
          <section className="flex min-h-[50vh] flex-col gap-2 px-4 lg:px-0">
            <h2 className="text-lg">Past Events</h2>
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
