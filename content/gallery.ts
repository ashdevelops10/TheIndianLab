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
  { id: "g2", src: u("photo-1514933651103-005eec06c04b", 1200, 800), category: "interior", alt: "Candlelit dining room", width: 1200, height: 800 },
  { id: "g3", src: u("photo-1550966871-3ed3cdb5ed0c", 1200, 1500), category: "interior", alt: "Luxury restaurant table", width: 1200, height: 1500 },
  { id: "g4", src: u("photo-1504674900247-0877df9cc836"), category: "food", alt: "Refined plated course", width: 1200, height: 1500 },
  { id: "g5", src: u("photo-1559339352-11d035aa65de", 1200, 800), category: "events", alt: "Private dinner service", width: 1200, height: 800 },
  { id: "g6", src: u("photo-1546833999-b9f581a1996d"), category: "food", alt: "Black dal", width: 1200, height: 1500 },
  { id: "g7", src: u("photo-1552566626-52f8b828add9", 1200, 800), category: "interior", alt: "Elegant lounge", width: 1200, height: 800 },
  { id: "g8", src: u("photo-1414235077428-338989a2e8c0"), category: "events", alt: "Chef's table", width: 1200, height: 1500 },
  { id: "g9", src: u("photo-1603894584373-5ac82b2ae398"), category: "food", alt: "Butter chicken", width: 1200, height: 1500 },
  { id: "g10", src: u("photo-1517248135467-4c7edcad34c4", 1200, 800), category: "interior", alt: "Dining room lounge", width: 1200, height: 800 },
  { id: "g11", src: u("photo-1527661591475-527312dd65f5"), category: "food", alt: "Premium cocktail", width: 1200, height: 1500 },
  { id: "g12", src: u("photo-1550966871-3ed3cdb5ed0c", 1200, 800), category: "events", alt: "Private dining", width: 1200, height: 800 },
];
