export type Cocktail = {
  id: string;
  name: string;
  base: string;
  ingredients: string[];
  method: string;
  note: string;
  price: number;
  image: string;
};

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=72`;

export const featuredCocktail: Cocktail = {
  id: "tamarind-negroni",
  name: "Midnight Tamarind Negroni",
  base: "Aged Campari",
  ingredients: [
    "Aged Campari · 30ml",
    "Sweet vermouth · 30ml",
    "London dry gin · 30ml",
    "Date-tamarind cordial · 10ml",
    "Cardamom oil · 1 mist",
  ],
  method: "Stirred · Served on a single rock · Orange peel",
  note: "A polished house Negroni rounded with date-tamarind cordial and a clean cardamom finish.",
  price: 22,
  image: u("photo-1527661591475-527312dd65f5"),
};

export const cocktails: Cocktail[] = [
  {
    id: "rose-cardamom-sour",
    name: "Rose Cardamom Sour",
    base: "Bourbon",
    ingredients: ["Bourbon", "Rose syrup", "Lemon", "Cardamom", "Egg white"],
    method: "Dry-shake · Fine-strain",
    note: "Soft, floral, and romantic, finished with a single rose petal.",
    price: 19,
    image: u("photo-1551024709-8f23befc6f87"),
  },
  {
    id: "smoked-old-fashioned",
    name: "Smoked Jaggery Old Fashioned",
    base: "Rye whisky",
    ingredients: ["Rye whisky", "Jaggery", "Black cardamom bitters", "Applewood smoke"],
    method: "Stirred · Smoked tableside",
    note: "Charred sugar, slow smoke, and a steady late-night edge.",
    price: 24,
    image: u("photo-1514362545857-3bc16c4c7d1b"),
  },
  {
    id: "saffron-spritz",
    name: "Victoria Saffron Spritz",
    base: "Prosecco",
    ingredients: ["Prosecco", "Saffron-infused Aperol", "Soda", "Orange"],
    method: "Built · Served long",
    note: "Bright, golden, and made for the patio at dusk.",
    price: 18,
    image: u("photo-1587223962930-cb7f31384c19"),
  },
];
