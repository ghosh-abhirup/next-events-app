import React from "react";
import Link from "next/link";

const HomePage = ({ data }) => {
  let num = 0;

  return (
    <div className="flex flex-col items-center my-8 ">
      {data.map((ev) => {
        if (num % 2 === 0) {
          num = num + 1;
          return (
            <Link
              key={ev.id}
              href={`/events/${ev.id}`}
              className="w-3/4 mt-4 md:mt-2 flex flex-col-reverse md:flex-row items-center justify-center gap-4"
            >
              <div className="w-3/4">
                <h2 className="text-xl font-bold text-center md:text-right">
                  {ev.title}
                </h2>
                <p className="text-center md:text-right">{ev.description}</p>
              </div>

              <img
                className="w-3/4 md:w-2/4 rounded-lg object-cover h-60"
                src={ev.image}
                alt="photo"
              />
            </Link>
          );
        } else {
          num = num + 1;
          return (
            <Link
              key={ev.id}
              href={`/events/${ev.id}`}
              className="w-3/4 mt-4 md:mt-2 flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-4"
            >
              <div className="w-3/4">
                <h2 className="text-xl font-bold text-center md:text-left">
                  {ev.title}
                </h2>
                <p className="text-center md:text-left">{ev.description}</p>
              </div>

              <img
                className="w-3/4 md:w-2/4 rounded-lg object-cover h-60"
                src={ev.image}
                alt="photo"
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default HomePage;
