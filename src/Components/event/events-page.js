import React from "react";
import Link from "next/link";

const Events = ({ data }) => {
  return (
    <div className="px-4 md:px-16 lg:px-32 mb-16">
      <h2 className="text-xl md:text-2xl mx-4 md:mx-8 my-4 ">Events Page</h2>
      <div className="w-11/12 mx-auto mt-4 flex flex-col md:flex-row items-center gap-4">
        {data.map((event) => (
          <Link
            href={`/events/${event.id}`}
            key={event.id}
            className="w-full md:w-2/6 h-80 bg-gradient-to-tr from-gray-600 to-gray-600 relative"
          >
            <img
              src={event.image}
              alt="image"
              className="w-full h-full object-cover absolute mix-blend-overlay"
            />
            <h2 className="z-10 text-center text-lg md:text-xl lg:text-2xl text-white font-bold absolute inset-y-1/2 inset-x-1/4">
              {event.title.toUpperCase()}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
