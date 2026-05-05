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
    bio: "Trained at Bukhara, Noma, and Gaggan. Obsessed with regional grain.",
    image: u("photo-1583394293214-28ded15ee548"),
  },
  {
    name: "Devan Rao",
    role: "Co-founder · Chemist",
    bio: "Spice scientist. Built the in-house mill and ferment program.",
    image: u("photo-1607990281513-2c110a25bd8c"),
  },
  {
    name: "Leah Mendes",
    role: "Sommelier",
    bio: "Pairing single-vineyard wines and small-batch arrack with Indian heat.",
    image: u("photo-1573496359142-b8d87734a5a2"),
  },
  {
    name: "Karan Joshi",
    role: "Pastry",
    bio: "Bringing kulfi, kheer and shrikhand into the modern dessert canon.",
    image: u("photo-1566753323558-f4e0952af115"),
  },
];
