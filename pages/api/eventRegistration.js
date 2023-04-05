import path from "path";
import fs from "fs";

function buildpath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export default async function handler(req, res) {
  const filePath = buildpath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    res.status(404).json({ msg: "Events data not found" });
  }

  if (req.method === "POST") {
    const { eventId, email } = req.body;
    let newAllEvents = allEvents;
    // const newAllEvents = allEvents.map((event) => {
    //   if (event.id === eventId) {
    //     if (event.emails_registered.includes(email)) {
    //       res.status(404).json({ message: "Email already registered" });
    //       return event;
    //     }
    //     return {
    //       ...event,
    //       emails_registered: [...event.emails_registered, email],
    //     };
    //   }
    //   return event;
    // });

    for (let i = 0; i < newAllEvents.length; i++) {
      if (newAllEvents[i].id === eventId) {
        if (newAllEvents[i].emails_registered.includes(email)) {
          res.status(409).json({ msg: "Email already registered" });
          break;
        } else {
          newAllEvents[i].emails_registered.push(email);
        }
      }
    }

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );
    res.status(200).json({ msg: `Successfully registered: ${email}` });
  }

  if (req.method === "GET") {
    res.status(200).json({ msg: "Registration axkhbakbj" });
  }

  // res.status(200).json({ name: "Registered" });
}
