export type GalleryItem = {
  id: string;
  src: string;
  category: "food" | "interior" | "events";
  alt: string;
  width: number;
  height: number;
};

const u = (id: string, w = 1200, h = 1500) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const gallery: GalleryItem[] = [
  { id: "g1", src: u("photo-1565557623262-b51c2513a641"), category: "food", alt: "Curry plated", width: 1200, height: 1500 },
  { id: "g2", src: u("photo-1517248135467-4c7edcad34c4", 1200, 800), category: "interior", alt: "Dining room", width: 1200, height: 800 },
  { id: "g3", src: u("photo-1414235077428-338989a2e8c0", 1200, 1500), category: "interior", alt: "Bar", width: 1200, height: 1500 },
  { id: "g4", src: u("photo-1600891964599-f61ba0e24092"), category: "food", alt: "Dessert", width: 1200, height: 1500 },
  { id: "g5", src: u("photo-1551024709-8f23befc6f87", 1200, 800), category: "events", alt: "Event night", width: 1200, height: 800 },
  { id: "g6", src: u("photo-1546833999-b9f581a1996d"), category: "food", alt: "Black dal", width: 1200, height: 1500 },
  { id: "g7", src: u("photo-1559339352-11d035aa65de", 1200, 800), category: "interior", alt: "Tandoor station", width: 1200, height: 800 },
  { id: "g8", src: u("photo-1559339352-11d035aa65de"), category: "events", alt: "Chef's table", width: 1200, height: 1500 },
  { id: "g9", src: u("photo-1603894584373-5ac82b2ae398"), category: "food", alt: "Butter chicken", width: 1200, height: 1500 },
  { id: "g10", src: u("photo-1543007354-66bb3df58e9d", 1200, 800), category: "interior", alt: "Lounge", width: 1200, height: 800 },
  { id: "g11", src: u("photo-1514362545857-3bc16c4c7d1b"), category: "food", alt: "Cocktail", width: 1200, height: 1500 },
  { id: "g12", src: u("photo-1551024601-bec78aea704b", 1200, 800), category: "events", alt: "Private dining", width: 1200, height: 800 },
];
