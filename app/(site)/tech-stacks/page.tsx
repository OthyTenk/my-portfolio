import { url } from "@/app/utils/constants";
import { Metadata } from "next";
import { PageHeader } from "../components";
import { TechStacks } from "../components/TechStacks";

export const metadata: Metadata = {
  title: "Tech Stacks",
  description:
    "Explore my tech stacks built with modern technologies like React, Next.js, and TypeScript.",
  openGraph: {
    title: "Tech Stacks | Odonbaatar Portfolio",
    description:
      "Explore my tech stacks built with modern technologies like React, Next.js, and TypeScript.",
    url: `${url}/tech-stacks`,
    siteName: "Odonbaatar Portfolio",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Tech Stacks | Odonbaatar Portfolio",
    description:
      "Explore my tech stacks built with modern technologies like React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${url}/tech-stacks`,
  },
};

const page = async () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <PageHeader
        title="Tech Stacks"
        description="A selection of tech stacks I use in my projects."
      />

      <TechStacks />
    </div>
  );
};

export default page;
