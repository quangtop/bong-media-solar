export interface RenewableReason {
  id: string;
  title: string;
  description: string;
}

export const RENEWABLES_REASONS: RenewableReason[] = [
  {
    id: "01",
    title: "Lower Carbon Emissions",
    description: "Displace fossil generation directly, cutting greenhouse output at the source rather than offsetting it.",
  },
  {
    id: "02",
    title: "Smarter Energy Consumption",
    description: "AI forecasting shifts load to match generation, reducing waste across the entire network.",
  },
  {
    id: "03",
    title: "Long-Term Cost Efficiency",
    description: "Falling hardware costs and near-zero marginal generation costs compound in your favor over decades.",
  },
  {
    id: "04",
    title: "Energy Independence",
    description: "Distributed generation and storage insulate homes and grids from price shocks and outages.",
  },
];
