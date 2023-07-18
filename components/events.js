import Marquee from "react-marquee-slider";

const events = [
    {
        name: "Horizon",
        location: "New York City, New York",
        logo: "https://cloud-3b48xagar-hack-club-bot.vercel.app/0horizon_logo.png",
        github_link: "https://github.com/hackclub/horizon",
        description: "In March 2023, Belle, 18, and Abby, 16, hosted Horizon in NYC kicking off our partnership with the Girl Scouts. They ran a series of workshops and coded all day Saturday with 37 Girl Scouts from NYC. In the evening, they hosted a dinner with 10 professional female tech leaders. Over brunch Sunday, they recapped and planned for another Day of Service in a new city.",
        photos: [
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/0horizonhighlights1.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/1horizonhighlights2.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/2horizonhighlights3.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/3horizonhighlights4.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/4horizonhighlights5.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/5horizonhighlights6.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/6horizonhighlights7.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/7horizonhighlights8.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/8horizonhighlights9.png",
            "https://cloud-l02gvh3rw-hack-club-bot.vercel.app/9horizonhighlights10.png",
            "https://cloud-bkn20hfh7-hack-club-bot.vercel.app/0horizonhighlights11.png",
            "https://cloud-bkn20hfh7-hack-club-bot.vercel.app/1horizonhighlights12.png",
            "https://cloud-bkn20hfh7-hack-club-bot.vercel.app/2horizonhighlights13.png",
            "https://cloud-bkn20hfh7-hack-club-bot.vercel.app/3horizonhighlights14.png",
            "https://cloud-bkn20hfh7-hack-club-bot.vercel.app/4horizonhighlights15.png",
            "https://cloud-bkn20hfh7-hack-club-bot.vercel.app/5horizonhighlights16.png",
            "https://cloud-bkn20hfh7-hack-club-bot.vercel.app/6horizonhighlights17.png",
        ],
        photocreds: "KMM Photography"
    },
    {
        name: "Alpine",
        location: "Salt Lake City, Utah",
        logo: "https://cloud-7zoxm80sm-hack-club-bot.vercel.app/0img_6658.jpg",
        github_link: "https://github.com/hackclub/alpine",
        description: "Jasmina, 18, hosted a hackathon, Alpine, in Salt Lake City. She wrote emails to local businesses to get office space for her event, and wrote emails to the Girl Scouts and youth groups so they would bring guests. She and her co-organizers made workshops to run at the event. All of this is open-sourced on the link below.",
        photos: [
            "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/0img_0067.jpeg",
            "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/1img_0045.jpeg",
            "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/2img_0040.jpeg",
            "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/3img_0038.jpeg",
            "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/4img_0030.jpeg",
        ],
        photocreds: ""
    },
]

export default function Events () {
    return (
        <div className="flex flex-col gap-2 lg:pr-5">
            {events.map(({name, location, logo, github_link, description, photos, photocreds}) => (
                <div key={name} className="flex flex-col justify-start items-start h-fit w-full border border-gray-400 rounded-lg p-4">
                    <img className="w-1/3" src={logo} alt={`Logo for ${name}`} />
                    <p className="text-lg italic">{location}</p>
                    <p className="">{description}</p>
                    <a href={github_link} target="_blank" className="underline text-lg text-gray-500 hover:text-[#ec3750] pb-2">See what went into planning
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pl-2 h-5 inline">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                    </svg>
                    </a>
                    {photos.length > 0 ? <Marquee velocity={10}>
                        {photos.map((photo) => (
                            <img key={photo} className="mr-2 w-[200px] h-full object-contain" src={photo} />
                        ))}
                    </Marquee> : ""}
                    {photocreds.length > 0 ? <p className="text-sm italic">Photo credits: {photocreds}</p> : null}
                </div>
            ))}
        </div>
    )
}