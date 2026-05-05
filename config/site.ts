export const siteConfig = {
  name: "The Indian Lab",
  shortName: "Indian Lab",
  description:
    "A modern Indian dining destination in Langford, Victoria — where heritage meets craft. Fine dining, curated cocktails, and a romantic atmosphere.",
  url: "https://theindianlab.com",
  established: "2026",
  city: "Langford",
  region: "Victoria, BC",
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
    { day: "Tue – Thu", time: "5pm – 11pm" },
    { day: "Fri", time: "5pm – 1am" },
    { day: "Sat", time: "12pm – 1am" },
    { day: "Sun", time: "12pm – 10pm" },
    { day: "Mon", time: "Closed" },
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
    "Eater",
    "Bon Appétit",
    "EnRoute",
    "The Globe & Mail",
    "Western Living",
    "Vancouver Magazine",
    "Foodism",
    "Condé Nast Traveler",
  ],
  pillars: [
    {
      no: "I",
      title: "Authenticity, Innovated",
      body: "Heritage recipes, traced to their source — then reimagined through modern technique and quiet precision.",
    },
    {
      no: "II",
      title: "Crafted Atmosphere",
      body: "Lighting tuned to the hour. Music curated by hand. Textures chosen for the way they catch flame.",
    },
    {
      no: "III",
      title: "Quality, Without Apology",
      body: "Premium ingredients, single-origin spice, and a beverage program built on world-class cellar selections.",
    },
  ],
  manifesto: [
    "Authentic & Innovated",
    "Romantic & Refined",
    "Crafted in Langford",
    "Open Kitchen · Curated Cellar",
    "भारत Reimagined",
  ],
};

export type SiteConfig = typeof siteConfig;
