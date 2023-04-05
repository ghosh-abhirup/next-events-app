import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SingleEvent = ({ eventData }) => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  // console.log(router);
  // const category = router.query.category;
  // console.log(category);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const id = router.query.id;

    try {
      // POST request
      const res = await axios.post("/api/eventRegistration", {
        eventId: id,
        email,
      });

      // console.log(res);
      setMsg(res.data.msg);
    } catch (error) {
      // console.log(error.response.data.msg);
      setMsg(error.response.data.msg);
    }
  };

  return (
    <div className="flex flex-col gap-4 my-16 px-4 md:px-16 lg:px-32">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
        {eventData.title}
      </h1>
      <img
        src={eventData.image}
        alt=""
        className="w-full object-cover rounded-lg"
      />
      <p>{eventData.description}</p>

      <form onSubmit={onSubmitHandler}>
        <h2 className="text-lg font-semibold mb-2">
          Get registered for this event!
        </h2>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mr-2 h-10 w-full md:w-1/3 lg:w-1/4"
        />
        <button className="h-10 font-semibold mt-2 md:mt-0 lg:mt-0 w-full md:w-1/5 lg:w-1/6 px-4 rounded-sm transition ease-in-out border-2 border-black bg-white hover:bg-black text-black hover:text-white">
          SUBMIT
        </button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default SingleEvent;
