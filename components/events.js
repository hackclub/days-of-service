import Marquee from "react-marquee-slider";
import { events } from "../data/events.js";

export default function Events() {
  return (
    <div className="flex flex-col gap-2">
      {events.reverse()
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
