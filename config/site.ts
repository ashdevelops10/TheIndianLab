export const siteConfig = {
  name: "The Indian Lab",
  shortName: "Indian Lab",
  description:
    "A modern Indian fine-dining destination in Victoria where authentic flavours, refined technique, curated cocktails, a global wine cellar, and a romantic atmosphere come together.",
  url: "https://theindianlab.com",
  established: "2026",
  city: "Victoria",
  region: "Greater Victoria, BC",
  address: {
    line1: "2401 Millstream Rd #193",
    city: "Langford",
    region: "BC",
    postal: "V9B 3R5",
    country: "Canada",
  },
  contact: {
    phone: "+1 250-555-0142",
    phoneDisplay: "+1 (250) 555-0142",
    email: "info@indianlab.ca",
    reservations: "info@indianlab.ca",
  },
  hours: [
    { day: "Mon - Thu", time: "5pm - 12am" },
    { day: "Fri", time: "5pm - 2am" },
    { day: "Sat", time: "12pm - 2am" },
    { day: "Sun", time: "12pm - 12am" },
  ],
  socials: {
    instagram: "https://instagram.com/theindianlab",
    facebook: "https://facebook.com/theindianlab",
  },
  ordering: {
    uberEats: "https://ubereats.com",
    doorDash: "https://doordash.com",
    skip: "https://skipthedishes.com",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=2401%20Millstream%20Rd%20%23193%2C%20Langford%2C%20BC%20V9B%203R5%2C%20Canada&output=embed",
  press: [
    "Victoria Dining Guide",
    "Western Living",
    "EnRoute",
    "The Globe & Mail",
    "Vancouver Magazine",
    "Foodism",
    "Wine & Spirits",
    "Condé Nast Traveler",
  ],
  pillars: [
    {
      no: "I",
      title: "Authenticity with Innovation",
      body: "Traditional Indian recipes are treated with respect, then elevated through modern technique, plating, and restraint.",
    },
    {
      no: "II",
      title: "Experience First",
      body: "Every detail, from lighting and music to pacing and service, is designed to create memorable moments.",
    },
    {
      no: "III",
      title: "Quality Without Compromise",
      body: "Premium ingredients, world-class beverages, and attentive hospitality shape the evening from start to finish.",
    },
    {
      no: "IV",
      title: "Elegance & Ambience",
      body: "A romantic room, luxurious textures, a vibrant patio, and carefully curated house music set a refined mood.",
    },
    {
      no: "V",
      title: "Global Perspective",
      body: "Indian roots meet global wines, cocktails, and influences, creating a dining experience that feels both local and worldly.",
    },
  ],
  manifesto: [
    "Authentic Roots · Modern Expression",
    "Romantic Fine Dining in Victoria",
    "Curated Cocktails · Global Wine Cellar",
    "Patio Evenings · Private Gatherings",
    "Indian Warmth · Contemporary Elegance",
  ],
};

export type SiteConfig = typeof siteConfig;
