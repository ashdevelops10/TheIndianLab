export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const team: TeamMember[] = [
  {
    name: "Anaya Kapoor",
    role: "Executive Chef",
    bio: "Leads a kitchen rooted in regional Indian recipes, modern technique, and quietly elegant plating.",
    image: u("photo-1583394293214-28ded15ee548"),
  },
  {
    name: "Devan Rao",
    role: "Co-founder · Experience Director",
    bio: "Shapes the room through music, pacing, lighting, and the warmth of Indian hospitality.",
    image: u("photo-1607990281513-2c110a25bd8c"),
  },
  {
    name: "Leah Mendes",
    role: "Sommelier · Cellar Lead",
    bio: "Builds a global wine program around spice, texture, heat, and celebration.",
    image: u("photo-1573496359142-b8d87734a5a2"),
  },
  {
    name: "Karan Joshi",
    role: "Bar & Dessert Program",
    bio: "Connects saffron, rose, cardamom, and smoke across signature cocktails and final courses.",
    image: u("photo-1566753323558-f4e0952af115"),
  },
];
