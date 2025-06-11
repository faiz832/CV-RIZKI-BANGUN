import Pot600Lbs from "../assets/images/pot600lbs.png";
import Pot100Lbs from "../assets/images/pot100lbs.png";
import AirFilter from "../assets/images/breathing.png";
import Pot60Lbs from "../assets/images/pot60lbs.png";
import AirManifold from "../assets/images/airmanifold.png";
import MoistureSeparator from "../assets/images/moisture.png";
import AirHoseRoha from "../assets/images/air-hose-roha-60-bar.png";
import BlastHoseMondea from "../assets/images/blast-hose-mondea.png";
import AirHoseMondea from "../assets/images/air-hose-mondea.png";
import BlastingHoseMondea from "../assets/images/blasting-hose-mondea.png";
import NozzleTungstenCarbide from "../assets/images/nozzle-tungsten-carbide.png";
import MoistureSeparator2 from "../assets/images/moisture-separator.png";
import GarnetMesh from "../assets/images/garnet-mesh.png";
import GarnetMesh2 from "../assets/images/garnet-mesh-2.png";
import SteelGrit from "../assets/images/steel-grit.png";
import GlassBeads from "../assets/images/glass-beads.png";
import SandblastingSuit from "../assets/images/sandblasting-suit.png";
import SandblastingHelmet from "../assets/images/sandblasting-helmet.png";

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
      name: 'Air Hose Rosa 60 Bar 5/16"',
      about: "High-quality replacement for sandblasting units.",
      thumbnail: AirHoseRoha,
    },
    {
      name: 'Blast Hose Mondea 3/4"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: BlastHoseMondea,
    },
    {
      name: 'Air Hose Mondea 5/16"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: AirHoseMondea,
    },
    {
      name: 'Blasting Hose Mondea 1/2"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: BlastingHoseMondea,
    },
    {
      name: 'Nozzle Tungsten Carbide 4/50"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: NozzleTungstenCarbide,
    },
    {
      name: 'Moisture Separator 1-1/2"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: MoistureSeparator2,
    },
  ],
  3: [
    {
      name: "Garnet Mesh 80 Grade A Pink",
      about: "Sharp and effective blasting media.",
      thumbnail: GarnetMesh,
    },
    {
      name: "Garnet Mesh 2-/40",
      about: "Eco-friendly sandblasting media.",
      thumbnail: GarnetMesh2,
    },
    {
      name: "Steel Grit",
      about: "Eco-friendly sandblasting media.",
      thumbnail: SteelGrit,
    },
    {
      name: "Glass Beads",
      about: "Eco-friendly sandblasting media.",
      thumbnail: GlassBeads,
    },
  ],
  4: [
    {
      name: "Sandblasting Suit",
      about: "Full-body protection during operations.",
      thumbnail: SandblastingSuit,
    },
    {
      name: "Sandblasting Helmet",
      about: "Protective gear for sandblasting workers.",
      thumbnail: SandblastingHelmet,
    },
  ],
};
