import React from "react";
import Link from "next/link";
import Events from "../../src/Components/event/events-page";

const EventsPage = ({ data }) => {
  return <Events data={data} />;
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
