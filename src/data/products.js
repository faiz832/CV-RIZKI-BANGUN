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
import SandblastingDet1 from "../assets/images/sandblasting-details-1.png";
import SandblastingDet2 from "../assets/images/sandblasting-details-2.png";
import SandblastingDet3 from "../assets/images/sandblasting-details-3.png";
import SandblastingDet4 from "../assets/images/sandblasting-details-4.png";
import SandblastingDet5 from "../assets/images/sandblasting-details-5.png";

export const categories = [
  { id: "machine", name: "Machine" },
  { id: "sparepart", name: "Sparepart" },
  { id: "material", name: "Material" },
  { id: "equipment", name: "Equipment" },
];

export const productsByCategory = {
  machine: [
    {
      id: "1",
      name: "Sandblasting Pot 600Lbs",
      about: "Heavy-duty pot for large-scale blasting operations.",
      thumbnail: Pot600Lbs,
      detailsImg: [SandblastingDet1, SandblastingDet2, SandblastingDet3, SandblastingDet4, SandblastingDet5],
    },
    {
      id: "2",
      name: "Sandblasting Pot 100 Lbs",
      about: "Compact and mobile sandblasting pot for small jobs.",
      thumbnail: Pot100Lbs,
      detailsImg: [],
    },
    {
      id: "3",
      name: "Breathing Air Filter",
      about: "Essential safety equipment for clean air supply.",
      thumbnail: AirFilter,
      detailsImg: [],
    },
    {
      id: "4",
      name: "Sandblasting Pot 60 Lbs",
      about: "Lightweight pot ideal for quick blasting tasks.",
      thumbnail: Pot60Lbs,
      detailsImg: [],
    },
    {
      id: "5",
      name: "Air Manifold 30 L Receiver Tank 6 Line",
      about: "Air distributor for multiple blasting lines.",
      thumbnail: AirManifold,
      detailsImg: [],
    },
    {
      id: "6",
      name: 'Moisture Separator 1-1/2"',
      about: "Removes moisture from compressed air system.",
      thumbnail: MoistureSeparator,
      detailsImg: [],
    },
  ],
  sparepart: [
    {
      id: "7",
      name: 'Air Hose Rosa 60 Bar 5/16"',
      about: "High-quality replacement for sandblasting units.",
      thumbnail: AirHoseRoha,
      detailsImg: [],
    },
    {
      id: "8",
      name: 'Blast Hose Mondea 3/4"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: BlastHoseMondea,
      detailsImg: [],
    },
    {
      id: "9",
      name: 'Air Hose Mondea 5/16"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: AirHoseMondea,
      detailsImg: [],
    },
    {
      id: "10",
      name: 'Blasting Hose Mondea 1/2"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: BlastingHoseMondea,
      detailsImg: [],
    },
    {
      id: "11",
      name: 'Nozzle Tungsten Carbide 4/50"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: NozzleTungstenCarbide,
      detailsImg: [],
    },
    {
      id: "12",
      name: 'Moisture Separator 1-1/2"',
      about: "Durable spare part for long-lasting use.",
      thumbnail: MoistureSeparator2,
      detailsImg: [],
    },
  ],
  material: [
    {
      id: "13",
      name: "Garnet Mesh 80 Grade A Pink",
      about: "Sharp and effective blasting media.",
      thumbnail: GarnetMesh,
      detailsImg: [],
    },
    {
      id: "14",
      name: "Garnet Mesh 2-/40",
      about: "Eco-friendly sandblasting media.",
      thumbnail: GarnetMesh2,
      detailsImg: [],
    },
    {
      id: "15",
      name: "Steel Grit",
      about: "Eco-friendly sandblasting media.",
      thumbnail: SteelGrit,
      detailsImg: [],
    },
    {
      id: "16",
      name: "Glass Beads",
      about: "Eco-friendly sandblasting media.",
      thumbnail: GlassBeads,
      detailsImg: [],
    },
  ],
  equipment: [
    {
      id: "17",
      name: "Sandblasting Suit",
      about: "Full-body protection during operations.",
      thumbnail: SandblastingSuit,
      detailsImg: [],
    },
    {
      id: "18",
      name: "Sandblasting Helmet",
      about: "Protective gear for sandblasting workers.",
      thumbnail: SandblastingHelmet,
      detailsImg: [],
    },
  ],
};

export const allProducts = Object.values(productsByCategory).flat();
