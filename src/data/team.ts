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
    title: "Kỹ sư điện mặt trời trưởng",
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
    title: "Chuyên gia tư vấn năng lượng cấp cao",
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
    title: "Trưởng nhóm lắp đặt hệ thống",
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
    title: "Quản lý dự án điện mặt trời",
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
    title: "Kỹ sư điện mặt trời trưởng",
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
    title: "Chuyên gia tư vấn năng lượng cấp cao",
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
    title: "Trưởng nhóm lắp đặt hệ thống",
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
    title: "Quản lý dự án điện mặt trời",
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