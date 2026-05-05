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

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const featuredCocktail: Cocktail = {
  id: "tamarind-negroni",
  name: "The Tamarind Negroni",
  base: "Aged Campari",
  ingredients: [
    "Aged Campari · 30ml",
    "Sweet vermouth · 30ml",
    "London dry gin · 30ml",
    "Date-tamarind cordial · 10ml",
    "Cardamom oil · 1 mist",
  ],
  method: "Stirred · Served on a single rock · Orange peel",
  note: "An aged Campari kissed with date-tamarind cordial, finished with a cardamom oil mist.",
  price: 22,
  image: u("photo-1551024709-8f23befc6f87"),
};

export const cocktails: Cocktail[] = [
  {
    id: "rose-cardamom-sour",
    name: "Rose & Cardamom Sour",
    base: "Bourbon",
    ingredients: ["Bourbon", "Rose syrup", "Lemon", "Cardamom", "Egg white"],
    method: "Dry-shake · Fine-strain",
    note: "Velvet, floral, finished with a single rose petal.",
    price: 19,
    image: u("photo-1514362545857-3bc16c4c7d1b"),
  },
  {
    id: "smoked-old-fashioned",
    name: "Smoked Old Fashioned",
    base: "Rye whisky",
    ingredients: ["Rye whisky", "Jaggery", "Black cardamom bitters", "Applewood smoke"],
    method: "Stirred · Smoked tableside",
    note: "Charred sugar, slow smoke, a single ice diamond.",
    price: 24,
    image: u("photo-1470337458703-46ad1756a187"),
  },
  {
    id: "saffron-spritz",
    name: "Saffron Spritz",
    base: "Prosecco",
    ingredients: ["Prosecco", "Saffron-infused Aperol", "Soda", "Orange"],
    method: "Built · Served long",
    note: "Bright, golden, lifted by saffron threads.",
    price: 18,
    image: u("photo-1587223962930-cb7f31384c19"),
  },
];
