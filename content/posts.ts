export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  category: string;
  cover: string;
  readingTime: string;
};

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const posts: Post[] = [
  {
    slug: "the-spice-mill",
    title: "Inside the Spice Mill",
    excerpt: "Why we grind 48 spices in-house every morning — and what it changes on the plate.",
    body: "Spices oxidize the moment they're cracked. To preserve the volatile oils that make a dish sing, we mill on demand — 48 spices, every morning, in small batches. The difference is dramatic.\n\nWe start before service with cumin, coriander, fennel, and ajwain. Each is dry-toasted at 110°C until fragrant, then ground to a precise mesh. Black cardamom, with its smoky pine note, is reserved for the evening's biryani. The result is a flavor wall that pre-ground spice cannot replicate.",
    date: "2026-04-12",
    category: "Kitchen",
    cover: u("photo-1596040033229-a9821ebd058d"),
    readingTime: "4 min",
  },
  {
    slug: "regional-india",
    title: "A Map of Regional India",
    excerpt: "From Kashmir to Kerala — how our menu travels the subcontinent.",
    body: "India is a continent of cuisines, not a single one. Our menu is laid out as a map: starters cluster around the north, mains cross from coast to coast, and desserts return home to Bengal.\n\nThis season we feature a Kashmiri rogan josh built on saffron stock, a Goan fish curry that leans into kokum's tartness, and a Hyderabadi biryani layered under a dough seal — a technique called *dum* that locks aromatic steam into every grain of rice.",
    date: "2026-03-02",
    category: "Menu",
    cover: u("photo-1505253758473-96b7015fcd40"),
    readingTime: "6 min",
  },
  {
    slug: "supper-club-vol-1",
    title: "Supper Club, Volume 1",
    excerpt: "An evening of tasting menus, vinyl, and stories. Recap and photos.",
    body: "We hosted twenty-four guests at a single table. Eight courses, paired with single-vineyard wines and a few well-chosen arrack cocktails. The menu travelled from a Goan amuse to a Kashmiri tasting course, ending with rasmalai under edible gold.\n\nVolume 2 is in planning. Subscribe to the newsletter to be first in line.",
    date: "2026-02-14",
    category: "Events",
    cover: u("photo-1551024709-8f23befc6f87"),
    readingTime: "3 min",
  },
];
