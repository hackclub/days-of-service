import React, { useEffect, useRef, useState } from "react";
import Meta from "@hackclub/meta";
import Head from "next/head";

export default function Home() {
  const spotlightRef = useRef();
  useEffect(() => {
    const handler = (event) => {
      var rect = document.getElementById("spotlight").getBoundingClientRect();
      var x = event.clientX - rect.left; //x position within the element.
      var y = event.clientY - rect.top; //y position within the element.

      spotlightRef.current.style.background = `radial-gradient(
                  circle at ${x}px ${y}px,
                  rgba(132, 146, 166, 0) 10px,
                  rgba(249, 250, 252, 0.9) 80px
              )`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <Meta
        as={Head} // component to wrap tags in, defaults to React.Fragment
        name="Hack Club" // site name
        title="Coding with Hack Club" // page title
        description="After a Day of Service" // page description
      />
      <div
        id="spotlight"
        as="section"
        className="w-full min-h-screen bg-[length:40px_40px] bg-repeat relative bg-[linear-gradient(to_right_bottom,rgba(254,235,238,0.35),rgba(254,235,238,0.35)),url('https://icons.hackclub.com/api/icons/0xDC7888/glyph:rep.svg')]"
      >
        <div
          ref={spotlightRef}
          className="absolute top-0 left-0 right-0 bottom-0 bg-[#ffffff] z-2"
        />
        <a href="https://hackclub.com" target="_blank">
          <img
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            className="w-32 z-5 absolute left-10 md:w-48"
          />
        </a>
        <div className="max-w-5xl w-10/12 m-auto pt-36 ">
          <a
            href="/"
            className="text-[#ec3750] z-5 font-bold relative px-2 py-2 rounded-full border border-rose-300 w-fit hover:bg-[#FEEBEE] hover:scale-[1.03] transition duration-250 ease-in cursor-pointer"
          >
            <img
              src="https://icons.hackclub.com/api/icons/0xec3750/glyph:view-back.svg"
              className="w-6 inline mr-1"
            />
            back
          </a>
        </div>
        <div className="grid z-5 relative max-w-5xl w-10/12 m-auto pb-36 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <div className="p-5 rounded-lg col-span-2">
            <h1 className="font-bold text-3xl">🫶🏼</h1>
            <h1 className="font-bold text-3xl">Days of Service</h1>
            <h3 className="text-xl">A Hack Club initiative</h3>
          </div>
          <div className="bg-[#FEEBEE] p-5 rounded-lg col-span-2 sm:col-span-2 flex items-end">
            We're a nonprofit community of 29,000 teenagers that love to make
            things.
          </div>
          <div className="bg-[#FEEBEE] p-5 col-span-2 rounded-lg flex items-end">
            <div>
              <a className="mt-2 block">
                <img
                  src="https://icons.hackclub.com/api/icons/0xEDBAC2/glyph:instagram.svg"
                  className="w-7 inline mr-1"
                />
                @starthackclub
              </a>
              <a className="mt-2 block">
                <img
                  src="https://icons.hackclub.com/api/icons/0xEDBAC2/glyph:github.svg"
                  className="w-7 inline mr-1"
                />
                @hackclub
              </a>
              <a className="mt-2 block">
                <img
                  src="https://icons.hackclub.com/api/icons/0xEDBAC2/glyph:slack-fill.svg"
                  className="w-7 inline mr-1"
                />
                hackclub.com/slack
              </a>
            </div>
          </div>
          <div className="bg-[#FEEBEE] p-5 col-span-2 sm:col-span-3 rounded-lg">
            <h3 className="text-xl font-bold">Hey! I'm Nila :)</h3>
            <p>// to be added</p>
            I'd love to chat! email me at{" "}
            <a href="mailto:nila@hackclub.com">nila@hackclub.com</a>
          </div>
          <div className="bg-[#FEEBEE] sm:col-span-3 rounded-lg hover:scale-[1.03] transition duration-250 ease-in">
            <img
              src="https://cloud-q1bl0at1m-hack-club-bot.vercel.app/0screenshot_2024-01-16_at_4.04.16_pm.png"
              className="rounded-lg"
            />
          </div>
          <div className="p-5 col-span-2 sm:col-span-6 rounded-lg border border-rose-200 bg-white">
            <h3 className="text-xl font-bold text-[#ec3750]">
              3 things you can do to keep coding:
            </h3>
          </div>
          <div className="bg-[#ffffff] col-span-2 sm:col-span-3 md:col-span-2 rounded-lg border border-rose-200	relative hover:scale-[1.03] transition duration-250 ease-in">
            <img
              src="https://icons.hackclub.com/api/icons/0xEDBAC2/glyph:external.svg"
              className="absolute top-3 right-3 w-7"
            />
            <a
              href="https://jams.hackclub.com/batch/webOS"
              className="rounded-lg bg-[#ec3750] px-3 py-1 text-white absolute bottom-4 left-4"
            >
              Improve your website
            </a>
            <img
              className="rounded-lg"
              src="https://cloud-21jzd6k06-hack-club-bot.vercel.app/0animatedversion.gif"
            />
          </div>
          <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.25)),url('https://cloud-l02gvh3rw-hack-club-bot.vercel.app/3horizonhighlights4.png')] bg-center p-5 col-span-2 sm:col-span-3 md:col-span-2  rounded-lg border border-rose-200	relative flex items-end hover:scale-[1.03] transition duration-250 ease-in bg-cover">
            <img
              src="https://icons.hackclub.com/api/icons/0xEDBAC2/glyph:external.svg"
              className="absolute top-3 right-3 w-7"
            />
            <div>
              <h1 className="text-xl text-white font-bold mb-2">
                Talk to dozens of other girls and code together
              </h1>
              <a
                href="https://hackclub.com/slack/?reason=Days%20of%20Service"
                className="rounded-lg bg-[#ec3750] px-3 py-1 text-white"
              >
                Join Hack Club Slack
              </a>
            </div>
          </div>
          <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.25)),url('https://cloud-l9vmg3n5i-hack-club-bot.vercel.app/0img_5774.jpg')] bg-center p-5 col-span-2 sm:col-span-3 md:col-span-2  rounded-lg border border-rose-200	relative flex items-end hover:scale-[1.03] transition duration-250 ease-in bg-cover">
            <img
              src="https://icons.hackclub.com/api/icons/0xEDBAC2/glyph:external.svg"
              className="absolute top-3 right-3 w-7"
            />
            <div>
              <h1 className="text-xl text-white font-bold mb-2">
                Help run a day of service
              </h1>
              <a
                href="mailto:nila@hackclub.com"
                className="rounded-lg bg-[#ec3750] px-3 py-1 text-white"
              >
                Email Nila
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
