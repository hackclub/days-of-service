import Marquee from "react-marquee-slider";

const events = [
  {
    name: "Horizon",
    location: "New York City, NY",
    date: "March, 2023",
    logo: "https://cloud-3b48xagar-hack-club-bot.vercel.app/0horizon_logo.png",
    github_link: "https://github.com/hackclub/horizon",
    description:
      "In March 2023, Belle, 18, and Abby, 16, hosted Horizon in NYC kicking off our partnership with the Girl Scouts. They ran a series of workshops and coded all day Saturday with 37 Girl Scouts from NYC. In the evening, they hosted a dinner with 10 professional female tech leaders. Over brunch Sunday, they recapped and planned for another Day of Service in a new city.",
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
    photocreds: "KMM Photography",
  },
  {
    name: "Alpine",
    location: "Salt Lake City, UT",
    date: "July, 2023",
    logo: "https://cloud-7zoxm80sm-hack-club-bot.vercel.app/0img_6658.jpg",
    github_link: "https://github.com/hackclub/alpine",
    description:
      "Jasmina, 18, hosted a hackathon, Alpine, in Salt Lake City. She wrote emails to local businesses to get office space for her event, and wrote emails to the Girl Scouts and youth groups so they would bring guests. She and her co-organizers made workshops to run at the event. All of this is open-sourced on the link below.",
    photos: [
      "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/0img_0067.jpeg",
      "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/1img_0045.jpeg",
      "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/2img_0040.jpeg",
      "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/3img_0038.jpeg",
      "https://cloud-g5rq0ijxx-hack-club-bot.vercel.app/4img_0030.jpeg",
    ],
    photocreds: "",
  },
  {
    name: "Spark",
    location: "San Francisco, CA",
    date: "Aug, 2023",
    logo: "https://cloud-g8aj80b0m-hack-club-bot.vercel.app/0image.png",
    github_link: "https://github.com/hackclub/spark",
    description:
      "Maggie, 18, and Kayley, 20, hosted Spark at Sentry’s office in San Francisco. With the help of their co-organizers, they ran a series of workshops—from building PCBs to Poker game strategies—and ran both a day-track and overnight-track for over 50 attendees. Prior to the hackathon, they organized a dinner with several tech professionals from the Bay Area hosted by Rebecca Lynn.",
    photos: [
      "https://lh3.googleusercontent.com/pw/AIL4fc-aCTVy-R72KpKQbbQJFD5lEWcz3TFlcDyTqNMC3j-EXa8Rce3f3JuJvoPL9mN9VZBsxmIUXOb-Sv0jTcja07IpTv0ibyUVoxR6x3VJowR2Jj9K3wwyGsYTVe0tryVnLJEUC2eVBqUF_TMNcJn0rB-j=w1506-h1001-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AIL4fc8UIIKEH9f7Yr1EiovFNvgtVNeKJF-6gxq0R3xdracJf6Mt8ma8zzJGWC5D71V6J3FVHu0FQsrF3rQWbbKflfaC0myi89e9sZkmYqVnTljGjUpbkmctvaCcZMeaHGQoeWDC14XH0XyUL_Lr6IbRbBJR=w1502-h1001-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AIL4fc_I9em25m9YTW8Uy56-uGJrDppLuqUwXFRMap59cQ5-qloLWstjqmOXBMR_9__bXCfcvrrb9LFWNuA5Hvu_08yXne14mWCtKp_XnS5-HpGqdYYP4Tpjrg0OEQnYBY8H0M8_3DRfs-NRZ1_be98JBv9A=w1502-h1001-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AIL4fc-VDde7xTQZz4nawIegiHA6k-5C_jb3mIxk7ls5hHCexO40BvPfxFGYw4u38QiRo2TtJWs2Pft_jga3SjAFAAXZhUycyHtvpKvGLqqBGsH9LqHZIDoRxOChd0u44fq4-amMO0PDHH_EkzjdNtZZWM3u=w1502-h1001-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AIL4fc8q5tPjayN0hav0YLb5LIfJ2Q29DesW74Gy6okpHL6fIqVIcAk6jqT7GONNaU2nknThCnTzlp0zikeqtT2r6Wx8WIO_Fo1v6gqpN6177c9gD0htYcUzBEnj-3qTZd-Sw-hXPKdaLXi386g4wqCGDS8e=w1502-h1001-s-no?authuser=0",
    ],
    photocreds: "",
  },
  {
    name: "LoneStar",
    location: "San Antonio, TX",
    date: "Sep, 2023",
    logo: "https://cloud-qklaf9t4y-hack-club-bot.vercel.app/0untitled.png",
    github_link: "https://github.com/hackclub/lonestar",
    description:
      "Lonestar was an 8-hour all-female/nonbinary hackathon from September 15th-17th organised by Aileen and Zoya, our two hack clubbers from Texas! “I had a lot of fun with Hack Club. In just the day that I worked, I learned the basics of making a website and I really loved working with y’all. This helped me on how I want to open people’s eyes on global warming.”  — Addie, a 7th grader from San Antonio",
    photos: [
      "https://cloud-tjfhn4z4i-hack-club-bot.vercel.app/0img_8675.jpg",
      "https://cloud-bvl31qfeu-hack-club-bot.vercel.app/020230916_121921.jpg",
      "https://cloud-kavud01na-hack-club-bot.vercel.app/0img_1726.jpg",
      "https://cloud-cbhei54z2-hack-club-bot.vercel.app/020230916_093640.jpg",
      "https://cloud-bvl31qfeu-hack-club-bot.vercel.app/020230916_121921.jpg",
    ],
    photocreds: "",
  },
  {
    name: "Harvest",
    location: "Burlington, VT",
    date: "Oct, 2023",
    logo: "https://cloud-8ln3q443h-hack-club-bot.vercel.app/0screenshot_20231001_190552_penup_2.jpg_10-18-56-737.jpg",
    github_link: "https://github.com/hackclub/harvest",
    description:
      "Harvest was a halloween themed social coding event in Burlington! Students got together to build their first website and games on Hack Club's Sprig engine and fulled themselves on halloween candy!",
    photos: [
      "https://cloud-740uhseap-hack-club-bot.vercel.app/0img_3134.heic",
      "https://cloud-aow7za3s6-hack-club-bot.vercel.app/0img_3143.heic",
      "https://cloud-lrmxlj4gd-hack-club-bot.vercel.app/0img_6419.jpg",
      "https://cloud-e5a0cdvcy-hack-club-bot.vercel.app/0img_6437.jpg",
      "https://cloud-l9vmg3n5i-hack-club-bot.vercel.app/1screenshot_2024-01-16_at_12.49.31_pm.png",
    ],
    photocreds: "",
  },
  {
    name: "Halo",
    location: "Los Angeles, CA",
    date: "Nov, 2023",
    logo: "https://cloud-efb6jycbn-hack-club-bot.vercel.app/0screenshot_2023-11-09_at_5.05.33_pm.png",
    github_link: "https://github.com/hackclub/halo",
    description:
      "Halo was a day long coding event organised in partnership with the Girl Scouts of Los Angeles! It took place in the Girl Scouts Innovation Centre with around 35 participants who spent the day learning to build a website using simple HTML, CSS and JavaScript or a video game on Hack Club's Sprig engine.",
    photos: [
      "https://cloud-82398rypd-hack-club-bot.vercel.app/0woop.jpg",
      "https://cloud-mwimfemam-hack-club-bot.vercel.app/0c1005.00_36_32_00.still018.jpg",
      "https://cloud-ws2l26p8c-hack-club-bot.vercel.app/0img_1666.jpg",
      "https://cloud-ozhhfkpwn-hack-club-bot.vercel.app/0img_1709.jpg",
      "https://cloud-l9vmg3n5i-hack-club-bot.vercel.app/0img_5774.jpg",
    ],
    photocreds: "",
  },
  {
    name: "Think Like a Programmer",
    location: "Boston, MA",
    date: "Feb, 2024",
    logo: "https://cloud-pfwehbqj4-hack-club-bot.vercel.app/0img_0417.png",
    github_link: "https://github.com/hackclub/think-like-a-programmer",
    description:
      "Think Like a Programmer was a hackathon organised in collaboration with the Girl Scouts of Eastern Massachusetts. 25 girl scouts learnt to build out wireframes for their apps to receive their Take Action award and 5 organisers built their first ever websites!",
    photos: [
      "https://cloud-4i4ldjlwz-hack-club-bot.vercel.app/0img_7568.jpg",
      "https://cloud-pommvllkp-hack-club-bot.vercel.app/0pxl_20240222_151032500.mp.jpg",
      "https://cloud-hip63cfd6-hack-club-bot.vercel.app/04d39ebbb-6726-46d9-969b-3adcf40c5538_1_105_c.jpeg",
      "https://cloud-r0boefhye-hack-club-bot.vercel.app/07a53b406-6a20-476a-86bc-b2d3f61b4e2f_1_105_c.jpeg",
      "https://cloud-59lgcu2q6-hack-club-bot.vercel.app/0pxl_20240222_153251104.mp.jpg",
    ],
    photocreds: "",
  },
  {
    name: "Blossom",
    location: "Atlanta, GA",
    date: "Mar, 2024",
    logo: "https://cloud-m2k6u58lv-hack-club-bot.vercel.app/0blossom_dino_-_no_sky.png",
    github_link: "https://github.com/hackclub/blossom",
    description:
      "Blossom 🌸 is a Hack Club Days of Service, an initiative started to bridge the gender gap in technology. We organized a day of coding in partnership with a local youth organization, The Girl Scouts of Greater Atlanta!",
    photos: [
      "https://cloud-hhue70g6y-hack-club-bot.vercel.app/0250a2865.jpg",
      "https://cloud-hhue70g6y-hack-club-bot.vercel.app/1250a2877.jpg",
      "https://cloud-hvi7pz8fo-hack-club-bot.vercel.app/0250a2935.jpg",
      "https://cloud-hvi7pz8fo-hack-club-bot.vercel.app/1250a2999.jpg",
      "https://cloud-hhue70g6y-hack-club-bot.vercel.app/4250a3142.jpg",
    ],
    photocreds: "",
  },
];

export default function Events() {
  return (
    <div className="flex flex-col gap-2">
      {events
        .reverse()
        .map(
          ({
            name,
            location,
            date,
            logo,
            github_link,
            description,
            photos,
            photocreds,
          }) => (
            <div
              key={name}
              className="flex h-fit w-full flex-col items-start justify-start rounded-lg border border-gray-400 md:p-4 relative pb-4"
            >
              <div className="flex h-fit w-full flex-col sm:flex-row items-center justify-start rounded-lg gap-4 p-5">
                <img
                  className=" w-2/3 sm:w-1/4"
                  src={logo}
                  alt={`Logo for ${name}`}
                />
                <p className="text-sm absolute top-2 right-2 text-[#ec3750] bg-[#FEEBEE] p-1 rounded-lg ">
                  {date} | {location}
                </p>
                <div>
                  <p className="">{description}</p>
                  <a
                    href={github_link}
                    target="_blank"
                    className="pb-2 text-lg text-gray-500 underline hover:text-[#ec3750]"
                  >
                    See what went into planning
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline h-5 pl-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {photos.length > 0 ? (
                <Marquee velocity={8}>
                  {photos.map((photo) => (
                    <img
                      key={photo}
                      className="mr-2 h-full w-[200px] object-fill"
                      src={photo}
                    />
                  ))}
                </Marquee>
              ) : (
                ""
              )}
              {photocreds.length > 0 ? (
                <p className="text-sm italic">Photo credits: {photocreds}</p>
              ) : null}
            </div>
          )
        )}
      <br />
    </div>
  );
}
