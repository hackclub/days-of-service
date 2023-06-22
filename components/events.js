import Marquee from "react-marquee-slider";

const events = [
    {
        name: "Horizon",
        location: "New York City, New York",
        logo: "https://cloud-3b48xagar-hack-club-bot.vercel.app/0horizon_logo.png",
        github_link: "https://github.com/hackclub/horizon",
        description: "Our first ever day of service hackathon in collaboration with the Girl Scouts of Greater New York.",
        photos: [
            "https://cloud-kpqzgy9pn-hack-club-bot.vercel.app/0kmm_6259.jpeg",
            "https://cloud-kpqzgy9pn-hack-club-bot.vercel.app/0kmm_6259.jpeg",
            "https://cloud-kpqzgy9pn-hack-club-bot.vercel.app/0kmm_6259.jpeg",
            "https://cloud-kpqzgy9pn-hack-club-bot.vercel.app/0kmm_6259.jpeg",
            "https://cloud-kpqzgy9pn-hack-club-bot.vercel.app/0kmm_6259.jpeg",
            "https://cloud-kpqzgy9pn-hack-club-bot.vercel.app/0kmm_6259.jpeg",
        ],
    },
    {
        name: "Alpine",
        location: "Salt Lake City, Utah",
        logo: "https://cloud-7zoxm80sm-hack-club-bot.vercel.app/0img_6658.jpg",
        github_link: "https://github.com/hackclub/alpine",
        description: "Our first ever day of service hackathon in collaboration with the Girl Scouts of Greater New York.",
        photos: [],
    },
]

export default function Events () {
    return (
        <div className="flex flex-col gap-2 mr-5">
            {events.map(({name, location, logo, github_link, description, photos}) => (
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
                </div>
            ))}
        </div>
    )
}