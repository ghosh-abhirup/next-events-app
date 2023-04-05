import React from "react";

import CategoryEvent from "../../../src/Components/event/category-event";

const CategoryPage = ({ data, cat }) => {
  return <CategoryEvent data={data} cat={cat} />;
};

export default CategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const category_paths = events_categories.map((ev) => {
    return {
      params: {
        category: ev.id.toString(),
      },
    };
  });

  // console.log(category_paths);
  return {
    paths: category_paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context.params.category;
  const { allEvents } = await import("../../../data/data.json");

  const events = allEvents.filter(
    (event) =>
      event.city.substring(0, 1).toLowerCase() + event.city.substring(1) === id
  );
  // console.log(events);
  return {
    props: {
      data: events,
      cat: id,
    },
  };
}
