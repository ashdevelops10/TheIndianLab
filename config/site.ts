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
    line1: "2900 Jacklin Road",
    city: "Langford",
    region: "BC",
    postal: "V9B 3X8",
    country: "Canada",
  },
  contact: {
    phone: "+1 250-555-0142",
    phoneDisplay: "+1 (250) 555-0142",
    email: "hello@theindianlab.com",
    reservations: "reservations@theindianlab.com",
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10456.05!2d-123.5!3d48.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLangford%20BC!5e0!3m2!1sen!2sca!4v1700000000000",
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
