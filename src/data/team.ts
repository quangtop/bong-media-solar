import { ComponentType, SVGProps } from "react";
import { StaticImageData } from "next/image";
import { FacebookF, Instagram, Linkedin, Pinterest } from "@/components/icons";

import teamA from "@/images/team-a.jpg";
import teamB from "@/images/team-b.jpg";
import teamC from "@/images/team-c.jpg";
import teamD from "@/images/team-d.jpg";

export interface TeamSocial {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  link: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: StaticImageData;
  socials?: TeamSocial[];
}

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Ronald Richards",
    title: "Lead Solar Engineer",
    image: teamA,
    socials: [
      {
        name: "Linkedin",
        icon: Linkedin,
        link: "#",
      },
      {
        name: "Pinterest",
        icon: Pinterest,
        link: "#",
      },
      {
        name: "Instagram",
        icon: Instagram,
        link: "#",
      },
      {
        name: "Facebook",
        icon: FacebookF,
        link: "#",
      },
    ]
  },
  {
    name: "Timothy Wallwork",
    title: "Senior Energy Consultant",
    image: teamB,
    socials: [
      {
        name: "Pinterest",
        icon: Pinterest,
        link: "#",
      },
      {
        name: "Instagram",
        icon: Instagram,
        link: "#",
      },
      {
        name: "Facebook",
        icon: FacebookF,
        link: "#",
      },
    ]
  },
  {
    name: "Brooklyn Simmons",
    title: "System Installation Lead",
    image: teamC,
    socials: [
      {
        name: "Linkedin",
        icon: Linkedin,
        link: "#",
      },
      {
        name: "Pinterest",
        icon: Pinterest,
        link: "#",
      },
      {
        name: "Instagram",
        icon: Instagram,
        link: "#",
      },
    ]
  },
  {
    name: "Kathryn Murphy",
    title: "Solar Project Manager",
    image: teamD,
    socials: [
      {
        name: "Linkedin",
        icon: Linkedin,
        link: "#",
      },
      {
        name: "Pinterest",
        icon: Pinterest,
        link: "#",
      },
      {
        name: "Instagram",
        icon: Instagram,
        link: "#",
      },
      {
        name: "Facebook",
        icon: FacebookF,
        link: "#",
      },
    ]
  },
  {
    name: "Ronald Richards",
    title: "Lead Solar Engineer",
    image: teamA,
    socials: [
      {
        name: "Linkedin",
        icon: Linkedin,
        link: "#",
      },
      {
        name: "Pinterest",
        icon: Pinterest,
        link: "#",
      },
      {
        name: "Facebook",
        icon: FacebookF,
        link: "#",
      },
    ]
  },
  {
    name: "Timothy Wallwork",
    title: "Senior Energy Consultant",
    image: teamB,
    socials: [
      {
        name: "Linkedin",
        icon: Linkedin,
        link: "#",
      },
      {
        name: "Pinterest",
        icon: Pinterest,
        link: "#",
      },
      {
        name: "Instagram",
        icon: Instagram,
        link: "#",
      },
      {
        name: "Facebook",
        icon: FacebookF,
        link: "#",
      },
    ]
  },
  {
    name: "Brooklyn Simmons",
    title: "System Installation Lead",
    image: teamC,
    socials: [
      {
        name: "Linkedin",
        icon: Linkedin,
        link: "#",
      },
      {
        name: "Pinterest",
        icon: Pinterest,
        link: "#",
      },
      {
        name: "Instagram",
        icon: Instagram,
        link: "#",
      },
      {
        name: "Facebook",
        icon: FacebookF,
        link: "#",
      },
    ]
  },
  {
    name: "Kathryn Murphy",
    title: "Solar Project Manager",
    image: teamD,
    socials: [
      {
        name: "Linkedin",
        icon: Linkedin,
        link: "#",
      },
      {
        name: "Pinterest",
        icon: Pinterest,
        link: "#",
      },
      {
        name: "Instagram",
        icon: Instagram,
        link: "#",
      },
      {
        name: "Facebook",
        icon: FacebookF,
        link: "#",
      },
    ]
  },
];