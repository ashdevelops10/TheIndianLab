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
    slug: "authenticity-with-innovation",
    title: "Authenticity with Innovation",
    excerpt: "How The Indian Lab keeps traditional Indian flavour at the centre while refining the way it arrives at the table.",
    body: "Indian cuisine carries memory: family recipes, regional techniques, spice blends, and the warmth of being served generously. Our work begins there, with respect for the dishes that shaped us.\n\nFrom that foundation, we refine. Sauces are clarified without losing depth, tandoor dishes are plated with restraint, and familiar flavours are paired with global wines and crafted cocktails. The goal is not to make Indian food less Indian. The goal is to let it feel vivid, elegant, and ready for the way Victoria dines now.",
    date: "2026-04-12",
    category: "Story",
    cover: u("photo-1596040033229-a9821ebd058d"),
    readingTime: "4 min",
  },
  {
    slug: "the-romantic-room",
    title: "The Romantic Room",
    excerpt: "Why lighting, music, texture, and service matter as much as the first bite.",
    body: "We built The Indian Lab around feeling. A guest should sense the shift as soon as they arrive: warm tones, soft light, a steady house rhythm, and a room that invites conversation rather than rushing it.\n\nThat atmosphere is not separate from the food. It frames the meal. A saffron cocktail feels different under low light. A slow-cooked dal becomes more generous when the room is calm. A patio table at dusk turns dinner into a small celebration. Experience comes first because memory is made from more than flavour alone.",
    date: "2026-03-02",
    category: "Ambience",
    cover: u("photo-1505253758473-96b7015fcd40"),
    readingTime: "6 min",
  },
  {
    slug: "cellar-and-cocktails",
    title: "Cellar & Cocktails",
    excerpt: "A look at the bar program: signature drinks, premium spirits, and wines chosen for Indian flavour.",
    body: "Our bar program is built with the same care as the kitchen. Tamarind, rose, saffron, cardamom, and smoke are treated as serious ingredients, not decoration. They bring Indian character into cocktails that still feel clean, balanced, and polished.\n\nThe cellar follows the same idea. Bottles are selected for how they meet spice, richness, acidity, and celebration: crisp whites for coastal curries, structured reds for tandoor, sparkling wines for the patio, and special pours for private gatherings.",
    date: "2026-02-14",
    category: "Bar",
    cover: u("photo-1551024709-8f23befc6f87"),
    readingTime: "3 min",
  },
];
