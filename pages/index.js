import HeadObject from '../components/head'
import Events from '../components/events'

export default function Home() {
  return (
    <>
      <HeadObject />
      <main className='min-h-screen min-w-screen flex flex-row justify-between font-phantom-sans'>
        <div className='flex flex-col gap-5 w-[40vw] max-h-screen overflow-y-scroll bg-[#ec3750] bg-opacity-10'>
          <section className='flex flex-col justify-end content-end py-10 px-10'>
            <h1 className='font-bold text-5xl'><span className='text-[#ec3750]'>Hack Club</span><br />Days of Service</h1>
          </section>
          <section className='px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>What is Hack Club?</h2>
            <p className='text-lg'>Hack Club is the largest non profit of over 26,350 teen hackers from around the world who code together. Check out our projects <a className="underline decoration-[#ec3750] hover:text-[#ec3750]" href="https://hackclub.com">here</a>.</p>
          </section>
          <section className='px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>Overview</h2>
            <p className='text-lg'>Hack Club is launching a new initiative to help Hack Clubbers to share their love and passion of coding with students in their area through one day hackathons.</p>
          </section>
          <section className='px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>What is a Day of Service?</h2>
            <p className='text-lg'>A one-day hackathon in collaboration organized by a group of Hack Clubbers in collaboration with an organization in your local area that serves low-income, minority, active airforce families communities. You’ll have the chance to train your organizing and technical skills, with the support of highly experienced hackathon organizers. You’ll hold an event that exposes a new community/group to coding while collaborating on a fun project for the day. </p>
          </section>
          <section className='px-10 flex flex-col'>
            <h2 className='text-lg text-[#ec3750]'>Partners</h2>
            <img className="w-1/3" src="https://www.girlscouts.org/content/dam/gsusa/images/header/Mainnavlogo.png" />
          </section>
          <section className='px-10 flex flex-col gap-2'>
            <h2 className='text-lg text-[#ec3750]'>Quotes</h2>
            <div className='flex flex-row gap-4'>
              <img className="w-20 h-20 rounded-full" src="https://github.com/sarthaktexas.png" />
              <div className='flex flex-col justify-center'>
                <p className='italic text-lg'>"Jahde said it was a perfect event she asked if this happens every Saturday!"</p>
                <h3 className=''>Sarthak Mohanty, Hack Clubber</h3>
              </div>
            </div>
          </section>
        </div>
        <div className='flex flex-col w-[59vw] max-h-screen overflow-y-scroll py-20'>
          <section className='flex flex-col gap-2 min-h-[50vh]'>
            <h2 className='text-lg'>Past Events</h2>
            <Events />
          </section>
        </div>
      </main>
    </>
  )
}
