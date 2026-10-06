import type { StaticImageData } from "next/image";
import projectA from "@/images/project-a.jpg";
import projectB from "@/images/project-b.jpg";
import projectC from "@/images/project-c.jpg";
import projectD from "@/images/project-d.jpg";
import projectE from "@/images/project-e.jpg";
import projectF from "@/images/project-f.jpg";
import projectG from "@/images/project-g.jpg";
import projectH from "@/images/project-h.jpg";
import projectI from "@/images/project-i.jpg";
import projectJ from "@/images/project-j.jpg";

import projectDetailMain from "@/images/service-large-a.jpg";
import gallery1 from "@/images/story-a.jpg";
import gallery2 from "@/images/story-b.jpg";
import gallery3 from "@/images/story-c.jpg";

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  location: string;
  image: StaticImageData;
  detailImage: StaticImageData;
  stats: ProjectStat[];
  category: string;
  address: string;
  capacity: string;
  completion: string;
  description: string;
  benefitsDescription: string;
  challengeDescription: string;
  features: ProjectFeature[];
  galleryImages: StaticImageData[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "meridian-solar-array",
    title: "Meridian Solar Array",
    tag: "SOLAR FARM",
    location: "Atacama Region, Chile",
    image: projectA,
    detailImage: projectDetailMain,
    stats: [
      { label: "CAPACITY", value: "140 MW" },
      { label: "HOMES POWERED", value: "62K" },
      { label: "CO2 / YEAR", value: "98K t" },
    ],
    category: "Solar Energy",
    address: "258 Street, California, USA",
    capacity: "140 MW",
    completion: "March 2025",
    description:
      "The Sun Valley region faced rising energy demand and an aging grid unable to meet peak summer loads without costly fossil-fuel peaker plants. Solurax designed and deployed a 140 MW solar array paired with grid-scale storage, replacing dependence on imported power with locally generated, dispatchable clean energy.\n\nEighteen months after breaking ground, the facility now supplies more than 62,000 homes and has become the anchor clean-energy asset for the entire corridor, cutting regional emissions while stabilizing prices across the grid.\n\nBuilt with high-efficiency bifacial panels and intelligent tracking mounts, the installation yields maximum solar radiance throughout the year.",
    benefitsDescription:
      "A utility-scale solar and storage facility engineered to power tens of thousands of homes with locally generated, dispatchable clean energy. Our team of experts provides in-depth consultations to help you explore the best renewable energy options for your property.",
    challengeDescription:
      "Our mission is to empower businesses size to thrive in an business's ever changing marketplace. We are committed to the delivering exceptional. The primary technical hurdle was configuring high-altitude solar trackers to withstand extreme desert wind gusts while maintaining 99.8% uptime reliability.",
    features: [
      {
        title: "High-Efficiency PV Panels",
        description: "Bifacial monocrystalline modules rated at 22.8% efficiency, engineered for 20+ years of consistent output.",
      },
      {
        title: "Real-Time Monitoring",
        description: "14,200 sensors stream live telemetry with AI models flagging underperformance automatically.",
      },
      {
        title: "Grid Optimization",
        description: "Load-balancing software routes power dynamically across 3,600 distribution nodes.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "northwind-coastal-park",
    title: "Northwind Coastal Park",
    tag: "WIND PARK",
    location: "Jylland, Denmark",
    image: projectB,
    detailImage: projectB,
    stats: [
      { label: "CAPACITY", value: "95 MW" },
      { label: "HOMES POWERED", value: "41K" },
      { label: "CO2 / YEAR", value: "70K t" },
    ],
    category: "Wind Energy",
    address: "Coastal Way 42, Jylland, Denmark",
    capacity: "95 MW",
    completion: "November 2024",
    description:
      "Northwind Coastal Park integrates 28 offshore-grade wind turbines designed to capture strong North Sea wind corridors. By feeding clean electricity directly into the national grid, this installation powers over 41,000 households daily.\n\nThe project incorporates smart pitch regulation and anti-icing blade technology, ensuring maximum operational performance even in harsh northern winters.",
    benefitsDescription:
      "Harnessing maritime wind currents to supply continuous green power with near-zero carbon operational footprint. Designed to stabilize coastal grid distribution during peak winter heating cycles.",
    challengeDescription:
      "Installing offshore subsea power lines across seabed ecological reserves required specialized trenching tech to eliminate underwater ecosystem disruption.",
    features: [
      {
        title: "Offshore Turbine Tech",
        description: "Direct-drive permanent magnet generators with active yaw alignment for turbulent coastal breezes.",
      },
      {
        title: "Subsea Interconnects",
        description: "Armored high-voltage underwater cabling minimizing line resistance across maritime spans.",
      },
      {
        title: "Predictive Maintenance",
        description: "Vibration analytics predict component wear 60 days before potential mechanical issues.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "aria-adaptive-grid",
    title: "Aria Adaptive Grid",
    tag: "SMART GRID",
    location: "Ontario, Canada",
    image: projectC,
    detailImage: projectC,
    stats: [
      { label: "NODES MANAGED", value: "1.4M" },
      { label: "UPTIME", value: "99.4%" },
      { label: "LOSS REDUCTION", value: "31%" },
    ],
    category: "Smart Infrastructure",
    address: "Bay Street Corridor, Ontario, Canada",
    capacity: "1.4M Nodes",
    completion: "January 2025",
    description:
      "Aria Adaptive Grid is a state-of-the-art smart grid overlay system connecting distributed wind, solar, and battery storage units across Ontario. Utilizing real-time AI node balancing, it has reduced power distribution losses by 31%.",
    benefitsDescription:
      "Eliminates local transformer overload risks, optimizes voltage stability, and seamless integrates decentralized residential rooftop installations.",
    challengeDescription:
      "Managing peak demand spikes across sub-zero Canadian winter nights required sub-millisecond automated load switching algorithms.",
    features: [
      {
        title: "Sub-Second Switching",
        description: "Automated solid-state relays isolate network faults in under 15 milliseconds.",
      },
      {
        title: "AI Load Forecasting",
        description: "Machine learning algorithms forecast localized neighborhood demand curves 48 hours ahead.",
      },
      {
        title: "Cyber-Secure Backbone",
        description: "End-to-end encrypted mesh network protects critical grid infrastructure from cyber threats.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "solara-residential-district",
    title: "Solara Residential District",
    tag: "SMART CITY",
    location: "Austin, United States",
    image: projectD,
    detailImage: projectD,
    stats: [
      { label: "ROOFTOPS", value: "12K" },
      { label: "CAPACITY", value: "58 MW" },
      { label: "ANNUAL SAVINGS", value: "$4.1M" },
    ],
    category: "Solar & Microgrid",
    address: "Bouldin Creek District, Austin, TX, USA",
    capacity: "58 MW",
    completion: "August 2024",
    description:
      "Connecting 12,000 residential rooftops into a unified solar microgrid. Solara Residential District allows homeowners to generate, share, and sell excess solar energy within their immediate community.",
    benefitsDescription:
      "Drastically reduces individual household electricity bills while providing neighborhood-wide emergency backup power during storm outages.",
    challengeDescription:
      "Coordinating bi-directional energy billing across thousands of independent homeowners required transparent peer-to-peer ledger software.",
    features: [
      {
        title: "Peer-to-Peer Energy",
        description: "Neighborhood microgrid software allows direct energy trading between residential battery banks.",
      },
      {
        title: "Smart Home Integration",
        description: "Native APIs integrate directly with smart thermostats and EV home chargers.",
      },
      {
        title: "Island Mode Backup",
        description: "Microgrid disconnects automatically from main grid during blackouts to keep homes powered.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "photon-fusion",
    title: "Photon Fusion",
    tag: "SMART GRID",
    location: "California, USA",
    image: projectE,
    detailImage: projectE,
    stats: [
      { label: "CAPACITY", value: "95 MW" },
      { label: "HOMES POWERED", value: "41K" },
      { label: "CO2 / YEAR", value: "70K t" },
    ],
    category: "Solar Storage",
    address: "Silicon Valley Clean Energy Hub, CA, USA",
    capacity: "95 MW",
    completion: "December 2024",
    description:
      "Photon Fusion combines high-capacity lithium iron phosphate (LFP) energy storage banks with rooftop commercial solar installations across major corporate campuses.",
    benefitsDescription:
      "Reduces commercial peak demand charges by up to 75% while ensuring uninterrupted power for mission-critical data centers.",
    challengeDescription:
      "Integrating ultra-fast battery response systems without tripping industrial circuit breakers.",
    features: [
      {
        title: "LFP Battery Array",
        description: "Long-cycle life battery storage units engineered for 15,000+ continuous charge cycles.",
      },
      {
        title: "Demand Shaving",
        description: "Automated peak-shaving software reduces utility demand surcharges during afternoon spikes.",
      },
      {
        title: "Thermal Management",
        description: "Liquid-cooled battery enclosures maintain optimal operating temperatures under heavy loads.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "solstice-fields",
    title: "Solstice Fields",
    tag: "SOLAR",
    location: "Jylland, Denmark",
    image: projectF,
    detailImage: projectF,
    stats: [
      { label: "ROOFTOPS", value: "12K" },
      { label: "CAPACITY", value: "58 MW" },
      { label: "ANNUAL SAVINGS", value: "$4.1M" },
    ],
    category: "Agrivoltaics",
    address: "Meadowlands 14, Jylland, Denmark",
    capacity: "58 MW",
    completion: "February 2025",
    description:
      "Solstice Fields is a pioneering agrivoltaic project combining elevated solar panels with active agricultural grazing and crop cultivation beneath.",
    benefitsDescription:
      "Dual land use preserves farming heritage while generating clean renewable electricity for regional municipal power grids.",
    challengeDescription:
      "Designing elevated racking systems to allow heavy farm equipment to pass freely underneath solar module rows.",
    features: [
      {
        title: "Elevated Racking",
        description: "Sturdy 4.5-meter clearance steel structures allowing farming tractors to operate underneath.",
      },
      {
        title: "Microclimate Control",
        description: "Solar panel shade reduces soil moisture evaporation by 28% during summer droughts.",
      },
      {
        title: "Clean Power Output",
        description: "Delivers 58 MW of clean electricity directly to regional distribution substations.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "helios-array",
    title: "Helios Energy Hub",
    tag: "SOLAR FARM",
    location: "Nevada, USA",
    image: projectG,
    detailImage: projectG,
    stats: [
      { label: "CAPACITY", value: "210 MW" },
      { label: "HOMES POWERED", value: "88K" },
      { label: "CO2 / YEAR", value: "140K t" },
    ],
    category: "Solar Energy",
    address: "Desert Horizon Route, NV, USA",
    capacity: "210 MW",
    completion: "April 2025",
    description:
      "Helios Energy Hub is a massive 210 MW solar facility utilizing single-axis trackers to capture maximum sunlight across desert expanses.",
    benefitsDescription:
      "Powers 88,000 homes while displacing over 140,000 metric tons of greenhouse gas emissions annually.",
    challengeDescription:
      "Implementing dust-repellent hydrophobic coatings to maintain high solar transmittance in desert dust storms.",
    features: [
      {
        title: "Single-Axis Trackers",
        description: "Automated solar tracking rotation increases daily energy yield by up to 25%.",
      },
      {
        title: "Dust-Proof Coating",
        description: "Self-cleaning hydrophobic glass treatment reduces panel washing water requirements by 80%.",
      },
      {
        title: "HVDC Transmission",
        description: "High-voltage direct current lines transmit power efficiently over long distances to urban centers.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "vanguard-grid",
    title: "Vanguard Microgrid",
    tag: "SMART GRID",
    location: "Melbourne, Australia",
    image: projectH,
    detailImage: projectH,
    stats: [
      { label: "NODES MANAGED", value: "850K" },
      { label: "UPTIME", value: "99.9%" },
      { label: "LOSS REDUCTION", value: "35%" },
    ],
    category: "Smart Grid",
    address: "Docklands Tech Center, Melbourne, VIC",
    capacity: "850K Nodes",
    completion: "May 2025",
    description:
      "Vanguard Microgrid optimizes industrial and residential energy sharing across Melbourne's technology corridor.",
    benefitsDescription:
      "Provides rapid black-start capability and guarantees 99.9% uptime for local commercial facilities.",
    challengeDescription:
      "Integrating legacy utility infrastructure with modern IoT edge controllers without downtime.",
    features: [
      {
        title: "Edge AI Controllers",
        description: "Decentralized compute nodes manage voltage frequency balancing locally within 5ms.",
      },
      {
        title: "Black-Start Capability",
        description: "Independent grid restart capability following regional power outages.",
      },
      {
        title: "Dynamic Pricing",
        description: "Automated trading engine optimizes battery charging when market wholesale power prices drop.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "nordic-wind-array",
    title: "Nordic Offshore Array",
    tag: "WIND PARK",
    location: "Oslofjord, Norway",
    image: projectI,
    detailImage: projectI,
    stats: [
      { label: "CAPACITY", value: "175 MW" },
      { label: "HOMES POWERED", value: "72K" },
      { label: "CO2 / YEAR", value: "115K t" },
    ],
    category: "Wind Energy",
    address: "Offshore Sector 4, Oslofjord, Norway",
    capacity: "175 MW",
    completion: "June 2025",
    description:
      "Floating deepwater wind turbine array deployed in deep fjord ocean waters, capturing strong offshore sea winds.",
    benefitsDescription:
      "Generates 175 MW of clean wind electricity, powering over 72,000 Nordic households.",
    challengeDescription:
      "Mooring floating turbine platforms in waters exceeding 200 meters depth while ensuring structural stability.",
    features: [
      {
        title: "Floating Tension Legs",
        description: "Submerged tether system anchors turbine platforms securely in deep fjord waters.",
      },
      {
        title: "15MW Turbine Units",
        description: "Giant rotor blades sweep massive offshore wind areas for maximum energy yield.",
      },
      {
        title: "Eco-Safe Anchors",
        description: "Suction caisson anchors minimize seafloor disturbance and marine life impact.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "zenith-district-grid",
    title: "Zenith Solar District",
    tag: "SMART CITY",
    location: "Tokyo, Japan",
    image: projectJ,
    detailImage: projectJ,
    stats: [
      { label: "ROOFTOPS", value: "18K" },
      { label: "CAPACITY", value: "82 MW" },
      { label: "ANNUAL SAVINGS", value: "$6.2M" },
    ],
    category: "Urban Microgrid",
    address: "Odaiba District, Tokyo, Japan",
    capacity: "82 MW",
    completion: "July 2025",
    description:
      "High-density urban rooftop solar and battery grid integrated into commercial skyscrapers and residential complexes.",
    benefitsDescription:
      "Delivers $6.2M in annual energy savings while enhancing urban disaster resilience during typhoons.",
    challengeDescription:
      "Adapting solar panel mounting hardware to meet strict seismic building safety codes.",
    features: [
      {
        title: "Seismic Mount Racking",
        description: "Shock-absorbing mounting hardware withstands high-magnitude earthquake tremors.",
      },
      {
        title: "BIPV Glass Facades",
        description: "Building-integrated photovoltaic windows generate clean power on skyscraper exteriors.",
      },
      {
        title: "Disaster Power Reserve",
        description: "Dedicated emergency battery reserve powers essential district shelters during grid outages.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
];
