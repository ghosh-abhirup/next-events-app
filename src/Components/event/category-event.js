import React from "react";
import Link from "next/link";

const CategoryEvent = ({ data, cat }) => {
  return (
    <div className="mb-16 px-4 md:px-16 lg:px-32">
      <h1 className="my-4 mx-4 md:mx-8 text-xl md:text-2xl ">
        Events in {cat.substring(0, 1).toUpperCase() + cat.substring(1)}
      </h1>
      <div className="w-11/12 mt-2 mx-auto flex flex-col md:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center ">
        {data.map((event) => (
          <Link
            key={event.id}
            href={`/events/${cat}/${event.id}`}
            className="flex flex-col gap-2 w-11/12 md:w-80 mt-4"
          >
            <img
              src={event.image}
              alt="photo"
              className="w-full aspect-square object-cover"
            />
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryEvent;
