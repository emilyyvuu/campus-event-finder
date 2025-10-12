// mock events for testing without backend
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Fall Concert",
    description: "Live bands and food trucks on the quad.",
    date: "2025-10-21T18:00:00Z",
    location: "Student Center",
    category: "Music",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Career Fair",
    description: "Meet recruiters from top companies.",
    date: "2025-11-05T18:00:00Z",
    location: "Lane Stadium",
    category: "Career",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Hackathon",
    description: "24-hour campus-wide hackathon.",
    date: "2025-10-30T15:30:00Z",
    location: "Goodwin Hall 190",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
  }
];

// listing all events
export async function listEvents() {
  return { items: MOCK_EVENTS };
}

// getting event by ID
export async function getEvent(id) {
  const e = MOCK_EVENTS.find(ev => ev.id === Number(id));
  if (!e) throw new Error("Event not found");
  return e;
}
