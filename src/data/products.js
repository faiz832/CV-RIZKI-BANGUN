import Pot600Lbs from "../assets/images/pot600lbs.png";
import Pot100Lbs from "../assets/images/pot100lbs.png";
import AirFilter from "../assets/images/breathing.png";
import Pot60Lbs from "../assets/images/pot60lbs.png";
import AirManifold from "../assets/images/airmanifold.png";
import MoistureSeparator from "../assets/images/moisture.png";
import AirHoseRoha from "../assets/images/air-hose-roha-60-bar.png";
import BlastHoseMondea from "../assets/images/blast-hose-mondea.png";

export const categories = [
  { id: 1, name: "Machine" },
  { id: 2, name: "Sparepart" },
  { id: 3, name: "Material" },
  { id: 4, name: "Equipment" },
];

export const productsByCategory = {
  1: [
    {
      name: "Sandblasting Pot 600Lbs",
      about: "Heavy-duty pot for large-scale blasting operations.",
      thumbnail: Pot600Lbs,
    },
    {
      name: "Sandblasting Pot 100 Lbs",
      about: "Compact and mobile sandblasting pot for small jobs.",
      thumbnail: Pot100Lbs,
    },
    {
      name: "Breathing Air Filter",
      about: "Essential safety equipment for clean air supply.",
      thumbnail: AirFilter,
    },
    {
      name: "Sandblasting Pot 60 Lbs",
      about: "Lightweight pot ideal for quick blasting tasks.",
      thumbnail: Pot60Lbs,
    },
    {
      name: "Air Manifold 30 L Receiver Tank 6 Line",
      about: "Air distributor for multiple blasting lines.",
      thumbnail: AirManifold,
    },
    {
      name: 'Moisture Separator 1-1/2"',
      about: "Removes moisture from compressed air system.",
      thumbnail: MoistureSeparator,
    },
  ],
  2: [
    {
      name: "Air Hose Rosa 60 Bar 5/16",
      about: "High-quality replacement for sandblasting units.",
      thumbnail: AirHoseRoha,
    },
    {
      name: "Blast Hose Mondea 3/4",
      about: "Durable spare part for long-lasting use.",
      thumbnail: BlastHoseMondea,
    },
  ],
  3: [
    {
      name: "Abrasive Material A",
      about: "Sharp and effective blasting media.",
      thumbnail: MoistureSeparator,
    },
    {
      name: "Abrasive Material B",
      about: "Eco-friendly sandblasting media.",
      thumbnail: AirFilter,
    },
  ],
  4: [
    {
      name: "Safety Helmet",
      about: "Protective gear for sandblasting workers.",
      thumbnail: Pot600Lbs,
    },
    {
      name: "Blasting Suit",
      about: "Full-body protection during operations.",
      thumbnail: AirManifold,
    },
  ],
};
