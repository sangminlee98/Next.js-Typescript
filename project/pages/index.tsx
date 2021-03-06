import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const filteredList = getFeaturedEvents();
  return (
    <div>
      <EventList list={filteredList} />
    </div>
  );
};

export default HomePage;
