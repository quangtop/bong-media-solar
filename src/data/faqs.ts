export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  description: string;
  questions: FaqQuestion[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    title: 'General questions',
    description: 'General questions section offers clear answers to common inquiries, helping users understand services, processes, pricing, timelines, and support for a smooth experience.',
    questions: [
      {
        question: "How much will I actually save on my electricity bill?",
        answer: "While savings depend on your roof size and current energy consumption, the average Sunvolt residential installation cuts monthly electricity bills by 50% to 70% from day one. During our initial consultation, we provide a 3D solar yield report showing your exact estimated savings.",
      },
      {
        question: "What is Net Metering and how does it benefit me?",
        answer: "Net Metering is a billing mechanism that credits you for the excess electricity your solar panels send back to the grid. During sunny hours, surplus power offsets the energy you draw from the utility at night, significantly reducing your net energy costs.",
      },
      {
        question: "Do solar panels generate electricity at night or on cloudy days?",
        answer: "Solar panels do not produce electricity at night, but they continue generating power on cloudy days at around 10% to 25% of their full capacity. Paired with a solar battery storage system or net metering, you can access reliable clean energy 24/7.",
      },
      {
        question: "Is my roof suitable for a solar panel installation?",
        answer: "Most roofs in good condition with minimal shading from trees or nearby structures are suitable for solar panel installation. Our team performs a comprehensive site assessment to evaluate structural integrity, roof angle, and sunlight exposure.",
      },
    ]
  },
  {
    title: 'Project & process',
    description: 'General questions section offers clear answers to common inquiries, helping users understand services, processes, pricing, timelines, and support for a smooth experience.',
    questions: [
      {
        question: "What is the average lifespan and warranty of a solar system?",
        answer: "Modern solar panels are engineered for durability, typically boasting a lifespan of 25 to 30 years or more. Most systems include a 25-year performance warranty ensuring panels maintain at least 80-85% of their original efficiency.",
      },
      {
        question: "How long does the design and installation process take?",
        answer: "The entire process—from initial consultation and site survey to custom design, permitting, and physical installation—usually takes 4 to 8 weeks. Physical installation on your roof typically finishes within 1 to 3 days.",
      },
      {
        question: "What kind of maintenance do solar panels require?",
        answer: "Solar panels require very little maintenance because they have no moving parts. Occasional cleaning to remove dust, leaves, or debris and an annual inspection by a professional are usually all that is required.",
      },
      {
        question: "Will my solar panels work during a utility grid blackout?",
        answer: "Standard grid-tied solar systems shut down automatically during grid outages to protect utility workers. However, if your system is equipped with a battery backup, it will seamlessly provide power to critical home circuits during a blackout.",
      },
    ]
  }
];
