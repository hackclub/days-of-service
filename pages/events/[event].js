import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return (
    <>
    
    <div>
    <p>Event Name: {router.query.event}</p>
  </div>

    <div className='border-8 text-right w-fit rounded p-6 bg-blue-100 border-cyan-400 border-double m-8 flex flex-col'>
      <h1 className='text-lg text-sky-600 mx-auto font-black text-transparent w-fit bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400'>Abby</h1>
      <h3 className='text-base font-medium'>Girl Scout Troup Number: 
    <div className='inline-flex flex-row gap-0.5 mx-1'>
        <span className='bg-green-600 border-green-800 border-2 py-0.5 px-1  text-white w-fit font-bold'>3</span>
        <span className='bg-green-600 border-green-800 border-2 py-0.5 px-1  text-white w-fit font-bold'>2</span>
        <span className='bg-green-600 border-green-800 border-2 py-0.5 px-1 text-white w-fit font-bold'>1</span>
      </div>
      </h3>
      <h3 className='text-base text-left font-medium text-orange-900'>Github Link: <a href='#'>add your user profile here!</a> </h3>
    </div>

    <div className='border-8 text-right w-fit rounded p-6 bg-blue-100 border-cyan-400 border-double m-8 flex flex-col'>
      <h1 className='text-lg text-sky-600 mx-auto font-black text-transparent w-fit bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400'>Abby</h1>
      <h3 className='text-base font-medium'>Girl Scout Troup Number: 
    <div className='inline-flex flex-row gap-0.5 mx-1'>
        <span className='bg-green-600 border-green-800 border-2 py-0.5 px-1  text-white w-fit font-bold'>3</span>
        <span className='bg-green-600 border-green-800 border-2 py-0.5 px-1  text-white w-fit font-bold'>2</span>
        <span className='bg-green-600 border-green-800 border-2 py-0.5 px-1 text-white w-fit font-bold'>1</span>
      </div>
      </h3>
      <h3 className='text-base text-left font-medium text-orange-900'>Github Link: <a href='#'>add your user profile here!</a> </h3>
    </div>

  </>
  )
}

// <a target="_blank" href={`https://github.com/hackclub/days-of-service/${router.query.event}`}>Event</a>