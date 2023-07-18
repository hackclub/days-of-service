import HeadObject from '../components/head'
import Events from '../components/events'
import Info from '../components/info'

export default function Home() {
  return (
    <>
      <HeadObject />
      <main className='lg:min-h-screen lg:min-w-screen flex flex-col lg:flex-row justify-between font-phantom-sans'>
        <div className='flex flex-col gap-5 py-10 lg:w-[40vw] lg:max-h-screen lg:overflow-y-scroll bg-[#ec3750] bg-opacity-10'>
          <section className='px-4 lg:px-10 flex flex-col justify-end content-end'>
            <h1 className='font-bold text-5xl'><span className='text-[#ec3750]'>Hack Club</span><br />Days of Service</h1>
          </section>
          <section className='px-4 lg:px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>What is Hack Club?</h2>
            <p className='text-lg'>Hack Club is the largest non profit of over 26,350 teen hackers from around the world who code together. Check out our projects <a className="underline decoration-[#ec3750] hover:text-[#ec3750]" href="https://hackclub.com">here</a>.</p>
          </section>
          <section className='px-4 lg:px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>Overview</h2>
            <p className='text-lg'>Hack Club has launched a new initiative to help Hack Clubbers to share their love and passion of coding with students from underrepresented groups who lack access to CS education through one day hackathons.</p>
          </section>
          <section className='px-4 lg:px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>What is a Day of Service?</h2>
            <ul className='list-disc list-inside'>
            <li className='text-lg'>A one-day hackathon in collaboration organized by a group of Hack Clubbers in collaboration with an organization in your local area that serves low-income, minority, active airforce families communities. </li>
            <li className='text-lg'>You’ll have the chance to train your organizing and technical skills, with the support of highly experienced hackathon organizers.</li>
            <li className='text-lg'>You’ll hold an event that exposes a new community/group to coding while collaborating on a fun project for the day.</li>
            </ul>
          </section>
          <section className='px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>How’s this different from a regular hackathon?</h2>
            <p className='text-lg'>The intention of the hackathon is to help other teenagers build their first project with code. To achieve that, the majority of guests will come through a nonprofit youth partner, like Girl Scouts of Boys and Girls Club– that specifically serves communities of less opportunity. And you'll be responsible for creating content/workshops at the beginner level for them and helping them ship their first project.</p>
            <p className='text-lg'>Hack Club supports Days of Service by offering close personal support to organizers, workshops, introductions, and grants. We help guide you from opening your repository to the closing ceremony. Additionally, Hack Club provides funding for travel stipends and event costs. The number of mentors and people flown in varies depending on the number of attendees at the event. To ensure the event's success, Hack Club offers abundant documentation about past events.</p>
          </section>
          <section className='px-10 flex flex-col gap-2'>
  <h2 className='text-lg text-[#ec3750]'>The basics:</h2>
  <ul className='pl-6 list-decimal'>
    <li className='text-lg'>Duration: Lasting a minimum of 8 hours.</li>
    <li className='text-lg'>Leadership: Led by a Hack Club member who will act as the event's coordinator.</li>
    <li className='text-lg'>Team Management: The coordinator will oversee a group of other Hack Club members specifically assembled for the event.</li>
    <li className='text-lg'>Financial Management: The event will run on Hack Club Bank.</li>
    <li className='text-lg'>Grant Acquisition: The organizers will secure a grant to support the event's expenses.</li>
    <li className='text-lg'>Preferred Partner Collaboration: The event will be conducted in partnership with a preferred partner organization such as Girl Scouts, Boy Scouts, 4H, Boys & Girls Club.</li>
    <li className='text-lg'>Participant Minimum: At least 20 high schoolers should be present at each event.</li>
  </ul>
</section>
          <section className='px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>What is Hack Club?</h2>
            <p className='text-lg'>Hack Club is the largest non profit of over 26,350 teen hackers from around the world who code together. Check out our projects <a className="underline decoration-[#ec3750] hover:text-[#ec3750]" href="https://hackclub.com">here</a>.</p>
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
        <div className='flex flex-col lg:w-[59vw] lg:max-h-screen lg:overflow-y-scroll py-20'>
          <section className='flex flex-col gap-2 min-h-[50vh] px-4 lg:px-0'>
            <h2 className='text-lg'>Past Events</h2>
            <Events />
          </section>
        </div>
      </main>
      {/* <div className='min-h-screen min-w-screen font-phantom-sans px-8 gap-6'>
      <Info />
      </div> */}
    </>
  )
}
