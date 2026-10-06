export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const PROCESS_DATA: ProcessStep[] = [
  {
    id: "01",
    title: "Free Site Analysis",
    description: "Expert evaluation of your energy needs and site potential."
  },
  {
    id: "02",
    title: "Custom 3D Engineering",
    description: "Precision engineering blueprints tailored to your property."
  },
  {
    id: "03",
    title: "Flawless Installation",
    description: "Rapid, clean deployment by our certified master technicians."
  },
  {
    id: "04",
    title: "Grid Activation",
    description: "We handle the utility company grid connection and activate"
  },
];
