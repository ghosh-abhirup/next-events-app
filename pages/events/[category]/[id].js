import React from "react";
import SingleEvent from "../../../src/Components/event/singleEvent";

const EventPerCityPage = ({ eventData }) => {
  return <SingleEvent eventData={eventData} />;
};

export default EventPerCityPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");

  const allIds = allEvents.map((event) => {
    return {
      params: {
        category:
          event.city.substring(0, 1).toLowerCase() + event.city.substring(1),
        id: event.id,
      },
    };
  });

  return {
    paths: allIds,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const { category, id } = context.params;
  const { allEvents } = await import("../../../data/data.json");

  const event = allEvents.filter((ev) => ev.id === id);
  // console.log(event);
  return {
    props: {
      eventData: event[0],
    },
  };
}
