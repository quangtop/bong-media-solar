import { StaticImageData } from "next/image";
import blogA from "@/images/blog-a.jpg";
import blogB from "@/images/blog-b.jpg";
import blogC from "@/images/blog-c.jpg";
import blogD from "@/images/blog-d.jpg";
import blogE from "@/images/blog-e.jpg";
import blogF from "@/images/blog-f.jpg";
import blogG from "@/images/blog-g.jpg";
import blogH from "@/images/blog-h.jpg";
import blogI from "@/images/blog-i.jpg";
import blogJ from "@/images/blog-j.jpg";
import avatarA from "@/images/avatar-a.jpg";
import avatarB from "@/images/avatar-b.jpg";
import avatarC from "@/images/avatar-c.jpg";

export interface BlogAuthor {
  name: string;
  avatar: StaticImageData | string;
}

export interface BlogPost {
  id: string;
  featured: boolean;
  tag: string;
  image: StaticImageData;
  title: string;
  excerpt: string;
  author: BlogAuthor;
  date: string;
  url: string;
}

export const BLOG_DATA: BlogPost[] = [
  {
    id: "post-001",
    featured: true,
    tag: "FEATURE",
    image: blogA,
    title: "The Ultimate Guide to Going Solar in 2026: What Homeowners Must Know Before Installing",
    excerpt: "Thinking about switching to solar this year? From roof orientation and sizing to net metering laws and cost analysis, here is everything you need to know to maximize your ROI from day one.",
    author: { name: "Javier Morales", avatar: avatarA },
    date: "2026-04-19",
    url: "#"
  },
  {
    id: "post-002",
    featured: false,
    tag: "",
    image: blogB,
    title: "How to Sell Your Excess Solar Energy Back to the Grid",
    excerpt: "Do you want to know what services or products they offer, especially related",
    author: { name: "Amara Whitfield", avatar: avatarB },
    date: "2024-10-10",
    url: "#"
  },
  {
    id: "post-003",
    featured: false,
    tag: "",
    image: blogC,
    title: "How to Integrate EV Charging Stations with Home Solar Grid",
    excerpt: "It sounds like you're referring to making improvements or changes",
    author: { name: "Daniel Osei", avatar: avatarC },
    date: "2024-10-18",
    url: "#"
  },
  {
    id: "post-004",
    featured: false,
    tag: "",
    image: blogD,
    title: "Simple Ways to Reduce Your Monthly Energy Usage",
    excerpt: "This could involve upgrading technology, implementing new strategies",
    author: { name: "Priya Nandakumar", avatar: "" },
    date: "2024-10-29",
    url: "#"
  },
  {
    id: "post-005",
    featured: false,
    tag: "",
    image: blogE,
    title: "Is a Backup Powerwall Worth the Investment?",
    excerpt: "Do you want to know what services or products they offer, especially related",
    author: { name: "Lucas Ferreira", avatar: "" },
    date: "2024-10-10",
    url: "#"
  },
  {
    id: "post-006",
    featured: false,
    tag: "",
    image: blogF,
    title: "Understanding the Real Savings Solar Can Bring",
    excerpt: "It sounds like you're referring to making improvements or changes",
    author: { name: "Sofia Marchetti", avatar: "" },
    date: "2024-10-18",
    url: "#"
  },
  {
    id: "post-007",
    featured: false,
    tag: "",
    image: blogG,
    title: "5 Simple Maintenance Tips to Keep Your Solar Panels",
    excerpt: "This could involve upgrading technology, implementing new strategies",
    author: { name: "Ethan Brooks", avatar: "" },
    date: "2024-10-29",
    url: "#"
  },
  {
    id: "post-008",
    featured: false,
    tag: "",
    image: blogH,
    title: "Choosing the Right Inverter for Your Home Solar System",
    excerpt: "String, micro, or hybrid inverters each come with tradeoffs worth understanding",
    author: { name: "Nadia Petrov", avatar: "" },
    date: "2024-11-04",
    url: "#"
  },
  {
    id: "post-009",
    featured: false,
    tag: "",
    image: blogI,
    title: "Solar Financing 101: Loans, Leases, and PPAs Explained",
    excerpt: "Understanding the difference could save you thousands over the life of your system",
    author: { name: "Marcus Chen", avatar: "" },
    date: "2024-11-12",
    url: "#"
  },
  {
    id: "post-010",
    featured: false,
    tag: "",
    image: blogJ,
    title: "What Happens to Solar Panels During a Storm?",
    excerpt: "Panels are built tough, but here's what you should know before severe weather hits",
    author: { name: "Isabela Rocha", avatar: "" },
    date: "2024-11-20",
    url: "#"
  },
  {
    id: "post-011",
    featured: false,
    tag: "",
    image: blogA,
    title: "Maximizing Solar Yield with Smart Home Automation",
    excerpt: "Discover how connecting your solar panels to smart IoT appliances optimizes daytime energy usage automatically.",
    author: { name: "Elena Rostova", avatar: "" },
    date: "2024-11-28",
    url: "#"
  },
  {
    id: "post-012",
    featured: false,
    tag: "",
    image: blogB,
    title: "Commercial Solar Tax Credits: 2026 Policy Overview",
    excerpt: "A breakdown of local and federal incentives available for enterprises upgrading to zero-emission infrastructure.",
    author: { name: "Oliver Vance", avatar: "" },
    date: "2024-12-05",
    url: "#"
  },
  {
    id: "post-013",
    featured: false,
    tag: "",
    image: blogC,
    title: "BIPV vs. Traditional Solar Panels: Which Is Right for You?",
    excerpt: "Comparing Building-Integrated Photovoltaics with standard roof mounts to help you make an informed aesthetic choice.",
    author: { name: "Maya Lin", avatar: "" },
    date: "2024-12-14",
    url: "#"
  }
];