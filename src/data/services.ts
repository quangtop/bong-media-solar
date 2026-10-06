import { StaticImageData } from "next/image";
import serviceA from "@/images/service-a.jpg";
import serviceB from "@/images/service-b.jpg";
import serviceC from "@/images/service-c.jpg";
import serviceD from "@/images/service-d.jpg";
import serviceE from "@/images/service-e.jpg";
import serviceF from "@/images/service-f.jpg";
import serviceLargeA from "@/images/service-large-a.jpg";
import serviceLargeB from "@/images/service-large-b.jpg";
import serviceCover from "@/images/service-cover.jpg";

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceSpecification {
  label: string;
  value: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: StaticImageData;
  bannerImage: StaticImageData;
  features: string[];
  benefits: ServiceBenefit[];
  specifications: ServiceSpecification[];
  faqs: ServiceFaq[];
}

export const SERVICE_DATA: ServiceItem[] = [
  {
    id: '1',
    title: 'Residential Solar',
    subtitle: 'Clean, Silent, Independent Power for Modern Homes',
    description: 'Advanced solar arrays tailored for modern homeowners who prioritize sustainability and economic independence.',
    fullDescription: 'Our residential solar panel installations transform your rooftop into a clean, private power plant. By pairing Tier-1 monocrystalline panels with smart microinverters and cloud energy monitoring, we help homeowners slash monthly electric utility bills by up to 80% while gaining complete energy independence.',
    image: serviceA,
    bannerImage: serviceLargeA,
    features: [
      'Tier-1 High Efficiency Monocrystalline Panels',
      'Integrated Microinverter Architecture for Maximum Yield',
      'Net Metering Integration & Bi-directional Meter Setup',
      'Real-Time Mobile App Energy & Savings Tracking',
      'Comprehensive 25-Year Weather & Performance Warranty'
    ],
    benefits: [
      {
        title: 'Massive Bill Reduction',
        description: 'Reduce monthly grid dependence immediately and lock in low electricity rates for decades.'
      },
      {
        title: 'Increased Property Value',
        description: 'Homes equipped with solar systems consistently sell faster and command higher property equity.'
      },
      {
        title: '24/7 Energy Resilience',
        description: 'Pair with home storage batteries to keep your lights and essential appliances running during grid outages.'
      }
    ],
    specifications: [
      { label: 'System Size Range', value: '4 kW – 20 kW Residential' },
      { label: 'Panel Efficiency', value: 'Up to 22.8% Monocrystalline' },
      { label: 'Warranty Period', value: '25 Years Linear Power Output' },
      { label: 'Payback Period', value: '3.5 to 5 Years Average ROI' }
    ],
    faqs: [
      {
        question: 'How long does a residential solar installation take?',
        answer: 'Physical installation on your roof typically takes 1 to 2 days. The complete process, including permitting, utility inspection, and net metering activation, averages 2 to 3 weeks.'
      },
      {
        question: 'What happens to my solar power on cloudy or rainy days?',
        answer: 'Solar panels generate electricity from diffuse daylight even through clouds. Any shortfall is seamlessly offset by the grid or your connected battery backup system.'
      },
      {
        question: 'Will solar panels damage my roof?',
        answer: 'No. Our certified installers use waterproof flashings and engineered racking systems designed to withstand extreme wind loads without compromising roof integrity.'
      }
    ]
  },
  {
    id: '2',
    title: 'Commercial Solar',
    subtitle: 'Industrial-Grade Energy Systems for Maximum Corporate ROI',
    description: 'Solurax industrial-grade energy solutions that optimize operational costs and enhance corporate ESG metrics.',
    fullDescription: 'Commercial energy expenses directly impact operating margins. Solurax designs custom rooftop, carport, and ground-mounted solar microgrids for factories, office parks, warehouses, and retail centers. We deliver fast ROI through tax incentives, accelerated depreciation, and peak demand shaving.',
    image: serviceB,
    bannerImage: serviceLargeB,
    features: [
      'Custom Commercial Racking & Ballasted Rooftop Mounting',
      'Peak Demand Shaving & Load Balancing Analytics',
      'Accelerated Depreciation (MACRS) & Federal Tax Credit Support',
      'High-Voltage Central & String Inverter Configurations',
      'SCADA Integration for Enterprise Fleet Monitoring'
    ],
    benefits: [
      {
        title: 'Predictable Operational Overhead',
        description: 'Hedge your business against volatile utility rate hikes with fixed, low-cost solar electricity generation.'
      },
      {
        title: 'Strengthen Corporate ESG',
        description: 'Demonstrate actionable environmental responsibility to shareholders, clients, and partners.'
      },
      {
        title: 'Rapid Investment Payback',
        description: 'Commercial tax credits and peak shaving allow most corporate installations to achieve full payback in under 4 years.'
      }
    ],
    specifications: [
      { label: 'System Size Range', value: '50 kW – 5 MW Commercial' },
      { label: 'Inverter Type', value: 'High-Efficiency String / Central' },
      { label: 'Monitoring System', value: 'Enterprise SCADA & API Access' },
      { label: 'ROI Timeline', value: '3 to 4 Years' }
    ],
    faqs: [
      {
        question: 'Will installation disrupt daily business operations?',
        answer: 'Not at all. Electrical tie-ins and structural mounting are scheduled during off-peak hours or weekends to ensure zero downtime for your daily operations.'
      },
      {
        question: 'Can we monetize unused commercial roof space?',
        answer: 'Yes. Excess energy generated by your commercial solar array can be fed into the utility grid through commercial net metering programs or power purchase agreements (PPAs).'
      }
    ]
  },
  {
    id: '3',
    title: 'Battery Storage',
    subtitle: 'Uninterrupted 24/7 Power Resilience & Smart Grid Management',
    description: 'Maintain 24/7 power resilience with our high-tech wall-mounted energy storage systems. Energy on your terms.',
    fullDescription: 'Solar power is most abundant during the day, but peak household and business energy demands often occur in the evening. Our advanced Lithium Iron Phosphate (LFP) battery storage systems store your solar surplus for use when utility rates spike or when storm power outages strike.',
    image: serviceC,
    bannerImage: serviceCover,
    features: [
      'Lithium Iron Phosphate (LFP) Chemistry for Maximum Thermal Safety',
      'Instantaneous Instant-On Automatic Transfer Switch (<10ms Backup)',
      'Smart Time-of-Use (TOU) Rate Optimization',
      'Modular Expansion Capacity from 5 kWh to 100+ kWh',
      '10-Year Full Replacement Battery Warranty'
    ],
    benefits: [
      {
        title: 'Zero Grid Blackout Anxiety',
        description: 'Keep your refrigerators, medical equipment, HVAC, and WiFi running seamlessly during weather emergencies.'
      },
      {
        title: 'Beat Time-of-Use Utility Rates',
        description: 'Automatically discharge battery power during peak utility pricing hours to avoid high rate charges.'
      },
      {
        title: 'Complete Off-Grid Capability',
        description: 'Store solar energy created during daytime hours to power your entire property through the night.'
      }
    ],
    specifications: [
      { label: 'Battery Chemistry', value: 'Lithium Iron Phosphate (LiFePO4)' },
      { label: 'Storage Capacity', value: '10 kWh – 200 kWh Modular' },
      { label: 'Switchover Time', value: '< 10 Milliseconds (Instantaneous)' },
      { label: 'Cycle Life', value: '6,000+ Cycles at 80% DoD' }
    ],
    faqs: [
      {
        question: 'How long can a battery storage system power my property?',
        answer: 'Depending on battery size and critical load configuration, a standard residential battery system can power essential loads for 24 to 72 hours, automatically recharging each day when the sun rises.'
      },
      {
        question: 'Are LFP batteries safe for indoor installation?',
        answer: 'Yes. LFP (Lithium Iron Phosphate) is the safest battery chemistry available, featuring exceptional thermal stability, non-toxic materials, and integrated fire suppression mechanisms.'
      }
    ]
  },
  {
    id: '4',
    title: 'EV Charging Station',
    subtitle: 'Turnkey Commercial & Residential Electric Vehicle Charging Infrastructure',
    description: 'Turnkey electric vehicle (EV) charging port installations for homes, commercial parking lots, and corporate fleets.',
    fullDescription: 'Fuel your electric vehicles directly from the sun. Solurax installs Level 2 fast chargers for homes and DC Fast Chargers for commercial hubs, corporate parking facilities, and fleet depots. Seamlessly integrated with solar arrays and cloud billing platforms.',
    image: serviceD,
    bannerImage: serviceLargeA,
    features: [
      'High-Speed Level 2 (48A) & DC Fast Charging (Up to 180kW)',
      'Solar-Direct Charging Mode (Zero Grid Fueling)',
      'OCPP Compliant Cloud Management & RFID Access',
      'Integrated Payment Terminals for Commercial Monetization',
      'Weatherproof NEMA 4X / IP66 Rated Enclosures'
    ],
    benefits: [
      {
        title: 'Charge EV with Free Solar Power',
        description: 'Power your electric vehicles using zero-cost green electrons generated directly by your rooftop solar system.'
      },
      {
        title: 'Attract Customers & Tenants',
        description: 'Offer premium EV charging amenities to increase dwell time and commercial property attractiveness.'
      },
      {
        title: 'Monetize Commercial Stations',
        description: 'Set custom charging fees per kWh or session duration using our automated payment gateway software.'
      }
    ],
    specifications: [
      { label: 'Charger Types', value: 'Level 2 AC & DC Fast Charger' },
      { label: 'Power Output', value: '7.6 kW – 180 kW Dual Port' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, 4G LTE, OCPP 1.6J' },
      { label: 'Enclosure Rating', value: 'NEMA 4X / IP66 Outdoor Ready' }
    ],
    faqs: [
      {
        question: 'Can I charge my EV at night using solar energy?',
        answer: 'Yes, by combining your solar panels with a Solurax battery storage system, solar energy collected during daytime hours is stored to fast-charge your vehicle overnight.'
      },
      {
        question: 'What electrical upgrades are required for a home Level 2 charger?',
        answer: 'Most Level 2 chargers require a dedicated 240V circuit (similar to an electric clothes dryer). Our certified electricians perform panel load calculations prior to installation.'
      }
    ]
  },
  {
    id: '5',
    title: 'Operation & Maintenance',
    subtitle: 'Proactive Monitoring, Thermal Inspections & Peak Yield Optimization',
    description: 'Proactive solar panel cleaning, thermal imaging inspections, inverter health checks, and wiring optimization.',
    fullDescription: 'Dust, pollen, thermal stress, and electrical degradation can reduce total solar production by up to 25% over time. Solurax offers 24/7 remote monitoring, automated sensor alerts, robotic panel washing, thermal drone imaging, and preventive maintenance packages to ensure maximum energy yield.',
    image: serviceE,
    bannerImage: serviceLargeB,
    features: [
      '24/7 AI-Driven Remote Performance Monitoring',
      'Infrared Thermal Imaging for Hotspot Detection',
      'De-ionized Eco-Friendly Panel Washing & Dust Removal',
      'Inverter Firmware Updates & Calibration Checks',
      'Emergency Rapid Response Dispatch (<4 Hours)'
    ],
    benefits: [
      {
        title: 'Maximize System Kilowatt Output',
        description: 'Regular cleaning and thermal tuning restore panels to 100% peak factory conversion efficiency.'
      },
      {
        title: 'Prevent Costly Equipment Failure',
        description: 'Detect wiring wear, inverter faults, and micro-cracks before they turn into expensive repairs.'
      },
      {
        title: 'Guaranteed Production Uptime',
        description: 'Our SLA agreements ensure your commercial or residential solar plant maintains continuous high uptime.'
      }
    ],
    specifications: [
      { label: 'Monitoring SLA', value: '24/7 Automated Error Detection' },
      { label: 'Inspection Tech', value: 'FLIR Thermal Drones & I-V Curve Tracing' },
      { label: 'Response Time', value: '< 4 Hours Emergency On-Site Dispatch' },
      { label: 'Cleaning Method', value: 'De-ionized Purified Water & Soft Brushes' }
    ],
    faqs: [
      {
        question: 'How often should solar panels be professionally cleaned?',
        answer: 'We recommend professional cleaning 1 to 2 times a year, or quarterly for properties located near dusty roads, agricultural zones, or coastal environments.'
      },
      {
        question: 'What is thermal imaging inspection?',
        answer: 'Thermal imaging uses infrared cameras to detect microscopic electrical resistance hotspots in solar cells and junction boxes before they cause component failure.'
      }
    ]
  },
  {
    id: '6',
    title: 'Solar Off-Grid Systems',
    subtitle: '100% Autonomous Energy Systems for Remote Cabins, Farms & Microgrids',
    description: 'Maintain 24/7 power resilience with our high-tech wall-mounted energy storage systems. Energy on your terms.',
    fullDescription: 'When power lines don\'t reach your property or grid connection fees are prohibitively expensive, Solurax Off-Grid Systems deliver complete energy autonomy. Combining heavy-duty solar arrays, MPPT charge controllers, industrial LFP batteries, and automated generator auto-start capabilities.',
    image: serviceF,
    bannerImage: serviceCover,
    features: [
      'Pure Sine Wave Heavy-Duty Off-Grid Inverters',
      'High-Voltage MPPT Solar Charge Controllers',
      'Expandable High-Capacity Industrial Battery Bank',
      'Automated Standby Generator Auto-Start Tie-In',
      'Ruggedized Extreme Weather & Temperature Racking'
    ],
    benefits: [
      {
        title: 'Eliminate Grid Connection Costs',
        description: 'Avoid paying utility companies tens of thousands of dollars to run utility poles to remote properties.'
      },
      {
        title: 'True 100% Energy Autonomy',
        description: 'Generate, store, and consume 100% of your power with zero utility bills and zero reliance on central grids.'
      },
      {
        title: 'Rugged Reliability in Remote Areas',
        description: 'Engineered specifically for agricultural farms, mountain cabins, islands, and remote telecommunication towers.'
      }
    ],
    specifications: [
      { label: 'Inverter Output', value: '5 kW – 50 kW Pure Sine Wave' },
      { label: 'Charge Controller', value: 'High Efficiency MPPT 99.5% Tracking' },
      { label: 'Battery Backup', value: '20 kWh – 300+ kWh Off-Grid LFP' },
      { label: 'Generator Backup', value: 'Integrated Auto-Start Relay Port' }
    ],
    faqs: [
      {
        question: 'Can an off-grid solar system run heavy appliances like AC and water pumps?',
        answer: 'Yes. Our off-grid systems are custom-sized with high peak surge surge-capacity inverters specifically designed to start high-inductance loads such as deep-well water pumps and HVAC units.'
      },
      {
        question: 'What happens during prolonged winter rain or snowstorms?',
        answer: 'Off-grid systems include a smart generator auto-start module. If solar production is low and battery voltage drops, the backup generator automatically runs to top off batteries and turns off when full.'
      }
    ]
  }
];
