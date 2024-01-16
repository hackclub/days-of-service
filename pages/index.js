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
            <p className="text-lg">
              Working with local youth organizations, high school Hack Club
              leaders — with the support of our HQ team — run one-day coding events (a day
              of service) and help students build their first ever website, app,
              and program. Built for beginners learning to code for the first
              time, supported by more experienced peer mentors. By the end of
              the day, every single participant would have built something with
              code.
            </p>
            <p className="text-lg">
              In 2023, this was brought to 6 cities and we plan on doubling it
              this year.
            </p>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <quote className="text-lg">
              <span className="text-3xl text-[#ec3750]">“</span>It was a perfect
              event. I brought 5 girls from my troop and they all were engaged
              and talked about how much they loved the event. One girl asked if
              this happens every Saturday!
              <span className="text-[#ec3750]">”</span>
            </quote>
            <i>—Parent of Day of Service attendee</i>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
          <h2 className="text-lg text-[#ec3750]">
              Watch a video of our latest event:
            </h2>
          <iframe className="w-full aspect-[16/9] m-auto" src="https://www.youtube.com/embed/hLCCbJw6Osg?si=Um_MuWLuXcShrulz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">
              Day in a life @ Days of Service events:
            </h2>
            <table className="table-auto border border-separate border-spacing-y-2 border-spacing-x-5 border-[#FEEBEE]">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Activiy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9am</td>
                  <td>Check in</td>
                </tr>
                <tr>
                  <td>10am</td>
                  <td>Opening and team formation</td>
                </tr>
                <tr>
                  <td>10:30am</td>
                  <td>
                    Workshops: Build your first website OR Make a game with
                    Sprig
                  </td>
                </tr>
                <tr>
                  <td>11:30am</td>
                  <td>Workshops: Collaborating with GitHub OR DIY Jeopardy</td>
                </tr>
                <tr>
                  <td>12:30pm</td>
                  <td>Lunch</td>
                </tr>
                <tr>
                  <td>1pm</td>
                  <td>
                    Workshops: Making art with code OR Improve your website!
                  </td>
                </tr>
                <tr>
                  <td>2pm</td>
                  <td>Brain break</td>
                </tr>
                <tr>
                  <td>2:30pm</td>
                  <td>Final Coding Time</td>
                </tr>
                <tr>
                  <td>4:30pm</td>
                  <td>Project Showcase & Closing Ceremony</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm">*Not all Days of Service are the same</p>
          </section>
          <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">
              Interested in running/hosting a day of service? Please reach us at{" "}
              <a href="mailto:marianna@hackclub.com">marianna@hackclub.com</a>
            </h2>
          </section>
          {/* <section className="flex flex-col gap-2 px-4 lg:px-10">
            <h2 className="text-lg text-[#ec3750]">
              How’s this different from a regular hackathon?
            </h2>
            <p className="text-lg">
              The intention of the hackathon is to help girls who lack access to resources and opportunities build
              their first project with code. To achieve that, the majority of
              guests will come through a nonprofit youth partner, like Girl
              Scouts– that specifically serve communities
              of gender minorities with less opportunity. Hack Clubbers will be responsible for creating beginner level content/workshops
              for them and helping them ship their first project.
            </p>
            <p className="text-lg">
              Hack Club supports Days of Service by offering close personal
              support to organizers. We help guide you
              from opening your repository to the closing ceremony.
              Additionally, Hack Club provides funding for travel stipends and
              event costs. The number of mentors and people flown in varies
              depending on the number of attendees at the event. To ensure the
              event's success, Hack Club offers abundant documentation about
              past events.
            </p>
          </section> */}
          {/* <section className="flex flex-col gap-2 px-4 lg:px-10">
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
                Funding: The organizers will be fully funded by Hack Club.
              </li>
              <li className="text-lg">
                Partner Organisation: The event will be conducted in
                partnership with a partner organization such as Girl
                Scouts or Boys & Girls Club.
              </li>
              <li className="text-lg">
                Minimum Participants: At least 30 high schoolers should be
                present at each event.
              </li>
            </ul>
          </section> */}
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
        <div className="flex flex-col py-4 lg:max-h-screen lg:w-[59vw] lg:overflow-y-scroll relative">
          <div className="pr-4 mb-4">
          <div className="w-full rounded-lg bg-cover text-center text-2xl font-bold bg-center text-white bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('https://cloud-g2uzli3ny-hack-club-bot.vercel.app/0hc.png')]">
            <a href="/code" target="_blank" className="w-full block py-16">
              Teenager? Click here.
            </a>
          </div>
          </div>
          <section className="flex min-h-[50vh] flex-col gap-2 px-4 lg:px-0">
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
