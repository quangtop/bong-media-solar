export type PricingPlan = {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  periodText: string;
  buttonText: string;
  buttonVariant: "default" | "light" | "darker" | "outline" | "outline-dark" | "link";
  isFeatured?: boolean;
  features: string[];
};

export const PLANS_DATA: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    subtitle: "Up to 4.5 kW System",
    monthlyPrice: 1260,
    yearlyPrice: 945,
    periodText: "Flexible Monthly Financing Available",
    buttonText: "GET ESTIMATE",
    buttonVariant: "default",
    features: [
      "Tier-1 High-Efficiency Solar Panels",
      "Standard Grid-Tied Smart Inverter",
      "Comprehensive Drone-Based Roof Shading Analysis",
      "In-House Professional Installation",
      "Standard 10-Year Workmanship Warranty",
      "Real-Time Mobile App Energy Tracking",
    ],
  },
  {
    id: "recommended",
    name: "Recommended Plan",
    subtitle: "Up to 8.5 kW System",
    monthlyPrice: 4256,
    yearlyPrice: 3192,
    periodText: "Most Popular Choice for Homeowners",
    buttonText: "REQUEST QUOTE",
    buttonVariant: "light",
    isFeatured: true,
    features: [
      "All features in Starter Plan, plus",
      "Premium High-Output Mono PERC Solar",
      "Next-Gen Microinverter Technology",
      "Priority Grid Interconnection Activation",
      "25-Year Premium Industry Performance Warranty",
      "24/7 Dedicated Customer Support Hotline",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    subtitle: "12+ kW Scalable System + Battery Storage",
    monthlyPrice: 6479,
    yearlyPrice: 4859,
    periodText: "Premium Complete Energy Security Setup",
    buttonText: "CONTACT US",
    buttonVariant: "default",
    features: [
      "All features in EcoStandard Plan, plus",
      "Ultra-Premium All-Black Aesthetic Solar Array",
      "Smart Battery Storage System Integration",
      "Automated Blackout Isolation Switch",
      "Built-in EV Level-2 Charging Station Setup",
      "Lifetime Proactive System Health Monitoring & Annual Cleaning Service",
    ],
  },
];
